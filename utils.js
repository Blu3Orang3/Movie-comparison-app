
//for time delay requests
const debounce = (func,delay=1000) => { 
  let timeoutId;
  return (...args) => {
    if(timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    },delay)
  }
};

// broken img thumbnile link
const noImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png';