Here are three simple JavaScript examples to copy text to the clipboard:

1. Using navigator.clipboard.writeText (Modern Approach)

```
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    console.log('Text copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
}

// Example usage
copyToClipboard('Hello, World!');
```

2. Using a Temporary textarea Element (Fallback for Older Browsers)

```
function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  console.log('Text copied to clipboard!');
}

// Example usage
copyToClipboard('Hello, World!');
```

3. Copying Text from an Input Field

```
function copyInputValue(inputId) {
  const input = document.getElementById(inputId);
  input.select();
  document.execCommand('copy');
  console.log('Input value copied to clipboard!');
}

// Example usage
// <input id="myInput" value="Hello, World!" />
// <button onclick="copyInputValue('myInput')">Copy</button>
```

These methods ensure compatibility across different browsers. The first method is preferred for modern browsers, while the second and third are useful for older environments.
