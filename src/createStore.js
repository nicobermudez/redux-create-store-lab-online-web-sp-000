export default function createStore(reducer) {
  function dispatch(action) {
    reducer(action)
    render();
  }
  function getState() {
    return state;
  }
}

function render() {
  const container = document.getElementById('container');
}
