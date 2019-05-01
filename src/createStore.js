export default function createStore(reducer) {
  let state;
  function dispatch(action) {
    reducer(action)
    render()
  }
  function getState() {
    return state;
  }
}

function render() {
  const container = document.getElementById('container');
}
