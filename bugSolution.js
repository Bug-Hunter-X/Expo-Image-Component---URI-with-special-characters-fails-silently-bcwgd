This solution involves URL-encoding the URI before passing it to the `Image` component using the `encodeURI` function. This ensures that special characters are correctly handled.

```javascript
// solution code
const uri = 'https://example.com/image with spaces.jpg';
const encodedUri = encodeURI(uri);

<Image
  source={{
    uri: encodedUri,
  }}
/>
```