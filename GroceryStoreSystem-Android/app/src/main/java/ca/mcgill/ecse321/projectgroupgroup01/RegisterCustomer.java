package ca.mcgill.ecse321.projectgroupgroup01;

import android.content.Intent;
import android.os.Bundle;

import com.google.android.material.snackbar.Snackbar;
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

import ca.mcgill.ecse321.projectgroupgroup01.databinding.ActivityRegisterCustomerBinding;
import cz.msebera.android.httpclient.Header;

public class RegisterCustomer extends AppCompatActivity {
    private String reg_error = null;
    private AppBarConfiguration appBarConfiguration;
    private ActivityRegisterCustomerBinding binding;
    private Button to_mainpage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        binding = ActivityRegisterCustomerBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        setSupportActionBar(binding.toolbar);

        NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment_content_register_customer);
        appBarConfiguration = new AppBarConfiguration.Builder(navController.getGraph()).build();
        NavigationUI.setupActionBarWithNavController(this, navController, appBarConfiguration);

        to_mainpage = (Button) findViewById(R.id.to_mainpage);
        to_mainpage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent myIntent = new Intent(RegisterCustomer.this, MainActivity.class);
                startActivity(myIntent); // go to Registration Page
            }
        });

    }

    @Override
    public boolean onSupportNavigateUp() {
        NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment_content_register_customer);
        return NavigationUI.navigateUp(navController, appBarConfiguration)
                || super.onSupportNavigateUp();
    }


    public void createCustomer(View v) {
        reg_error = "";
        final TextView tvName = (TextView) findViewById(R.id.newcustomer_name);
        final TextView tvEmail = (TextView) findViewById(R.id.newcustomer_email);
        final TextView tvPassword = (TextView) findViewById(R.id.newcustomer_password);
        HttpUtils.post("customers/" + tvName.getText().toString()
                        + "/" + tvEmail.getText().toString() + "/" + tvPassword.getText().toString()
                , new RequestParams(),
                new JsonHttpResponseHandler() {
                    @Override
                    public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
                        refreshErrorMessage();
                        tvName.setText("");
                        tvEmail.setText("");
                        tvPassword.setText("");
                    }

                    @Override
                    public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse) {
                        try {
                            reg_error += errorResponse.get("message").toString();
                        } catch (JSONException e) {
                            reg_error += e.getMessage();
                        }
                        refreshErrorMessage();
                    }
                });

    }

    private void refreshErrorMessage() {
        // set the error message
        TextView tvError = (TextView) findViewById(R.id.error);
        tvError.setText(reg_error);

        if (reg_error == null || reg_error.length() == 0) {
            tvError.setVisibility(View.GONE);
        } else {
            tvError.setVisibility(View.VISIBLE);
        }
    }
}