import { backendLookup } from "../lookup";

export function apitweetCreate(newTweet, callback) {
  backendLookup("POST", "/tweets/create/", callback, { content: newTweet });
}

export function apitweetAction(tweetId, action, callback) {
  const data = {
    id: tweetId,
    action: action,
  };
  backendLookup("POST", "/tweets/action/", callback, data);
}

export function apitweetDetail(tweetId, callback) {
  backendLookup("GET", `/tweets/${tweetId}/`, callback);
}

export function apitweetList(username, callback) {
  let endpoint = "/tweets/";
  if (username) {
    endpoint = `/tweets/?username=${username}`;
  }
  backendLookup("GET", endpoint, callback);
}
