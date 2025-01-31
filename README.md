# Expo Image Component URI Issue

This repository demonstrates a bug in the Expo `Image` component where images with URIs containing special characters (spaces, accented characters, etc.) fail to load without throwing an error. 

## Bug Description

The `Image` component silently fails to load when provided with a URI that includes special characters like spaces or accented letters.  No error messages or warnings are provided, making debugging difficult.

## Steps to Reproduce

1. Clone this repository.
2. Run the app using `expo start`.
3. Observe that the image with spaces in its filename fails to load.

## Solution

The solution involves properly URL encoding the URI before passing it to the `Image` component using the `encodeURI` function.  This ensures that special characters are correctly handled.

## Note

This issue might be related to specific Expo SDK versions or underlying platform behavior.  The solution provided here is effective in many cases but may require adaptation depending on the environment and context.