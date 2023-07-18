package com.sharedsettings

import android.content.Intent
import android.os.Bundle
import android.content.Context
import android.widget.ArrayAdapter
import android.app.Activity
import android.content.SharedPreferences
import android.net.Uri

class RespondActivity : Activity() {

    override fun onResume() {
        super.onResume()

        val prefs = this.getSharedPreferences("com.sharedsettings", Context.MODE_PRIVATE)

        var setting = prefs.getString("setting", "unset") ?: "unset"

        try {
            val responseIntent = Intent(Intent.ACTION_VIEW, Uri.parse("https://jonegerton.com/response-string?value=$setting"))
            this.startActivity(responseIntent)
        } catch (ex: Exception) {
            println("request error $ex")
        }
    }
}
