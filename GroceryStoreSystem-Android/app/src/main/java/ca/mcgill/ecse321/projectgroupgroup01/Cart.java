package ca.mcgill.ecse321.projectgroupgroup01;

import android.content.Intent;
import android.os.Bundle;

import com.loopj.android.http.JsonHttpResponseHandler;
import com.loopj.android.http.RequestParams;

import androidx.appcompat.app.AppCompatActivity;

import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.navigation.ui.NavigationUI;

import org.json.JSONException;
import org.json.JSONObject;

import ca.mcgill.ecse321.projectgroupgroup01.databinding.ActivityCartBinding;
import ca.mcgill.ecse321.projectgroupgroup01.databinding.ActivityLoginUserBinding;

public class Cart extends AppCompatActivity {
    private String checkout_error = null;
    private AppBarConfiguration appBarConfiguration;
    private ActivityCartBinding binding;
    private Button to_mainpage;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        binding = ActivityCartBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        setSupportActionBar(binding.toolbar);

        NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment_content_cart);
        appBarConfiguration = new AppBarConfiguration.Builder(navController.getGraph()).build();
        NavigationUI.setupActionBarWithNavController(this, navController, appBarConfiguration);

        to_mainpage = (Button) findViewById(R.id.to_mainpage);
        to_mainpage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent myIntent = new Intent(Cart.this, CustomerMain.class);
                startActivity(myIntent);
            }
        });

    }

    @Override
    public boolean onSupportNavigateUp() {
        NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment_content_cart);
        return NavigationUI.navigateUp(navController, appBarConfiguration)
                || super.onSupportNavigateUp();
    }


    public void Checkout(View v) {
        checkout_error = "";
        String userEmail;
        try {
            userEmail = Globals.user.getString("email");
        } catch (Exception e) {
            userEmail = "";
        }
        HttpUtils.post("orders/new"
                , new RequestParams(userEmail),
                new JsonHttpResponseHandler() {
                    @Override
                    public void onSuccess(int statusCode, cz.msebera.android.httpclient.Header[] headers, JSONObject response) {
                        refreshErrorMessage();

                    }

                    @Override
                    public void onFailure(int statusCode, cz.msebera.android.httpclient.Header[] headers, Throwable throwable, JSONObject errorResponse) {
                        try {
                            checkout_error += errorResponse.get("message").toString();
                        } catch (JSONException e) {
                            checkout_error += e.getMessage();
                        }
                        refreshErrorMessage();
                    }
                });

    }

    private void refreshErrorMessage() {
        // set the error message
        TextView tvError = (TextView) findViewById(R.id.error);
        tvError.setText(checkout_error);

        if (checkout_error == null || checkout_error.length() == 0) {
            tvError.setVisibility(View.GONE);
        } else {
            tvError.setVisibility(View.VISIBLE);
        }
    }
}