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

        import ca.mcgill.ecse321.projectgroupgroup01.databinding.ActivityLoginUserBinding;

public class Login extends AppCompatActivity {
    private String login_error = null;
    private AppBarConfiguration appBarConfiguration;
    private ActivityLoginUserBinding binding;
    private Button to_mainpage;
    public JSONObject user;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        binding = ActivityLoginUserBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        setSupportActionBar(binding.toolbar);

        NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment_content_login_user);
        appBarConfiguration = new AppBarConfiguration.Builder(navController.getGraph()).build();
        NavigationUI.setupActionBarWithNavController(this, navController, appBarConfiguration);

        to_mainpage = (Button) findViewById(R.id.to_mainpage);
        to_mainpage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent myIntent = new Intent(Login.this, MainActivity.class);
                startActivity(myIntent);
            }
        });

    }

    @Override
    public boolean onSupportNavigateUp() {
        NavController navController = Navigation.findNavController(this, R.id.nav_host_fragment_content_register_customer);
        return NavigationUI.navigateUp(navController, appBarConfiguration)
                || super.onSupportNavigateUp();
    }

    public void Login(View v) {
        login_error = "";
        final TextView tvEmail = (TextView) findViewById(R.id.user_email);
        final TextView tvPassword = (TextView) findViewById(R.id.user_password);
        HttpUtils.get("login/" + tvEmail.getText().toString() + "/" + tvPassword.getText().toString()
                , new RequestParams(),
                new JsonHttpResponseHandler() {
                    @Override
                    public void onSuccess(int statusCode, cz.msebera.android.httpclient.Header[] headers, JSONObject response) {
                        refreshErrorMessage();
                        tvEmail.setText("");
                        tvPassword.setText("");
                        user = response;
                        Globals.user = response;
                        try {
                            // go to Customer view
                            Intent myIntent = new Intent(Login.this, CustomerMain.class);
                            startActivity(myIntent);

                        } catch (Exception e) {
                            login_error += e.getMessage();
                        }
                    }

                    @Override
                    public void onFailure(int statusCode, cz.msebera.android.httpclient.Header[] headers, Throwable throwable, JSONObject errorResponse) {
                        try {
                            login_error += errorResponse.get("message").toString();
                        } catch (JSONException e) {
                            login_error += e.getMessage();
                        }
                        refreshErrorMessage();
                    }
                });

    }

    private void refreshErrorMessage() {
        // set the error message
        TextView tvError = (TextView) findViewById(R.id.error);
        tvError.setText(login_error);

        if (login_error == null || login_error.length() == 0) {
            tvError.setVisibility(View.GONE);
        } else {
            tvError.setVisibility(View.VISIBLE);
        }
    }
}

