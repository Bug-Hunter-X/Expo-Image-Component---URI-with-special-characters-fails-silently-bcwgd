This bug occurs when using the Expo `Image` component with a URI that contains special characters, such as spaces or accented characters.  The image fails to load, and no error is thrown. The issue seems to be related to how Expo handles URI encoding within the Image component, especially when dealing with dynamic URIs.

```javascript
// buggy code
<Image
  source={{
    uri: 'https://example.com/image with spaces.jpg',
  }}
/>
```