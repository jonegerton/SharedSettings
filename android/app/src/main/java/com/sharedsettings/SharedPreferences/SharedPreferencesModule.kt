package com.sharedsettings.sharedPreferences;

import android.content.Context
import android.content.SharedPreferences
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback

class SharedPreferencesModule(private val reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
    private val sharedPreferences: SharedPreferences = reactContext.getSharedPreferences("com.sharedsettings", Context.MODE_PRIVATE)

    override fun getName(): String {
        return "SharedPreferences"
    }

    @ReactMethod
    fun set(key: String, value: String) {
        sharedPreferences.edit().putString(key, value).apply()
    }

    @ReactMethod
    fun get(key: String, defaultValue: String, callback: Callback) {
        callback.invoke(sharedPreferences.getString(key, defaultValue) ?: defaultValue)
    }
}
