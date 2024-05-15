package dev.robingenz.capacitor.plugindemo;

import android.bluetooth.BluetoothGatt;
import android.bluetooth.BluetoothGattCharacteristic;

import androidx.annotation.NonNull;

import com.getcapacitor.Logger;

public class BluetoothLowEnergyHeadlessTask {
  public void onCharacteristicChanged(@NonNull BluetoothGatt gatt, @NonNull BluetoothGattCharacteristic characteristic, @NonNull byte[] value) {
    Logger.debug("BluetoothLowEnergyHeadlessTask", "Characteristic changed: " + characteristic.getUuid().toString() + " Value: " + value);
  }
}
