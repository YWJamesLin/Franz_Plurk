module.exports = (Franz) => {
  function getMessages() {
    let direct = 0;

    const np = document.querySelector('#noti_np_count');
    const re = document.querySelector('#noti_re_count');

    if (np || re) {
      direct = parseInt (np.innerHTML) + parseInt (re.innerHTML);
    }

    Franz.setBadge (direct);

  }

  Franz.loop(getMessages, 10000);
}
