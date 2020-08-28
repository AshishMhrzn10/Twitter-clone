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

export function apitweetFeed(callback, nextUrl) {
  let endpoint = "/tweets/feed/";
  if (nextUrl !== null && nextUrl !== undefined){
    endpoint = nextUrl.replace("http://localhost:8000/api", "")
  }
  backendLookup("GET", endpoint, callback);
}

export function apitweetList(username, callback, nextUrl) {
  let endpoint = "/tweets/";
  if (username) {
    endpoint = `/tweets/?username=${username}`;
  }
  if (nextUrl !== null && nextUrl !== undefined){
    endpoint = nextUrl.replace("http://localhost:8000/api", "")
  }
  backendLookup("GET", endpoint, callback);
}
