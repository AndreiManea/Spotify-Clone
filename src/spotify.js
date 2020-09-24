// First URL AFTER LOGIN BUTTON
export const authEndPoint = "https://accounts.spotify.com/authorize";

// After Spotify authorizes the login redirect to this url
const redirectUri = "http://localhost:3000/";

// Client id from spotify.developer App Dashboard
const clientId = "300cca896205404098e4adc13a8f8000";

// User Permissions
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// Get the Token from Url
export const getTokenFromUrl = () => {
  // .hash goes to the # from the URL
  return (
    window.location.hash
      // .substring(1) returns the string after the #
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {})
  );
};

// Full Link
export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
