package ca.mcgill.ecse321.projectgroupgroup01;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;

import com.google.android.material.appbar.CollapsingToolbarLayout;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;
import com.loopj.android.http.JsonHttpResponseHandler;
import com.loopj.android.http.RequestParams;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.TextView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

import ca.mcgill.ecse321.projectgroupgroup01.databinding.ActivityAddItemToCartBinding;
import cz.msebera.android.httpclient.Header;

public class AddItemToCart extends AppCompatActivity {
    private String error = null;
    private ActivityAddItemToCartBinding binding;
    private Button toMainButton;
    private ArrayAdapter<String> itemAdapter;
    private String userEmail = null;
    private Button appleButton, grapeButton, bananaButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        //TODO: get current user email on Create
        /* Insert get current user email here */

        super.onCreate(savedInstanceState);

        binding = ActivityAddItemToCartBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        Toolbar toolbar = binding.toolbar;
        setSupportActionBar(toolbar);
        CollapsingToolbarLayout toolBarLayout = binding.toolbarLayout;
        toolBarLayout.setTitle(getTitle());

        toMainButton = (Button) findViewById(R.id.to_main_button);
        toMainButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent myIntent = new Intent(AddItemToCart.this, CustomerMain.class);
                startActivity(myIntent);
            }
        });

        appleButton = (Button) findViewById(R.id.appleButton);
        appleButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                addItemToCart(view, "apple");
            }
        });

        bananaButton = (Button) findViewById(R.id.bananaButton);
        bananaButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                addItemToCart(view, "banana");
            }
        });

        grapeButton = (Button) findViewById(R.id.grapeButton);
        grapeButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                addItemToCart(view, "grapes");
            }
        });



    }

    private void refreshErrorMessage() {
        // set the error message
        TextView tvError = (TextView) findViewById(R.id.addItemError);
        tvError.setText(error);

        if (error == null || error.length() == 0) {
            tvError.setVisibility(View.GONE);
        } else {
            tvError.setVisibility(View.VISIBLE);
        }
    }

    public void addItemToCart(View v, String item_name) {
        error = "";
        String customer_email = "";
        try {
            customer_email = Globals.user.getString("email");
        } catch (Exception e) {
            error += e.getMessage();
        }

        //final TextView tvEmail = (TextView) findViewById(R.id.customer_email);
        //final TextView tvItemName = (TextView) findViewById(R.id.item_name);
        HttpUtils.get("carts/addItem/" + item_name
                        + "/" + customer_email,
                new RequestParams(), new JsonHttpResponseHandler() {
                    //@Override
                    public void onSuccess(int statusCode, Header[] headers, JSONObject response) {
                        refreshErrorMessage();

                    }

                    //@Override
                    public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse) {
                        try {
                            error += errorResponse.get("message").toString();
                        } catch (JSONException e) {
                            error += e.getMessage();
                        }
                        refreshErrorMessage();
                    }
                });
    }

    public void refreshGroceryItemList(){
        HttpUtils.get("products/", new RequestParams(), new JsonHttpResponseHandler() {
            @Override
            public void onSuccess(int statusCode, Header[] headers, JSONArray response) {

                try {
                    Globals.groceryItems =response;
                } catch (Exception e) {
                    error += e.getMessage();
                }

                refreshErrorMessage();
                //adapter.notifyDataSetChanged();
            }

            @Override
            public void onFailure(int statusCode, Header[] headers, Throwable throwable, JSONObject errorResponse) {
                try {
                    error += errorResponse.get("message").toString();
                } catch (JSONException e) {
                    error += e.getMessage();
                }
                refreshErrorMessage();
            }
        });
    }

}