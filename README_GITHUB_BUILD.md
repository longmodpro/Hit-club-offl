# Build APK by Git push

This is an independent offline research demo. It is not a recovered full HITCLUB source tree.

## Build
1. Create an empty GitHub repository.
2. Upload/push the contents of this `AndroidBuild` folder to the repository root.
3. Push to branch `main`.
4. Open the repository's **Actions** tab and select **Build Offline Research APK**.
5. After the workflow succeeds, open its run and download artifact `Offline-Wallet-Research-debug`.

The APK wraps the local HTML/CSS/JS demo in Android WebView. It has no network permission and no deposit, withdrawal, transfer, payment, or gambling functionality.
