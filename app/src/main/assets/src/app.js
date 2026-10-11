(() => {
  'use strict';
  // Reconstructed study logic: local points only; intentionally no transaction operations.
  const STARTING_POINTS = 1000;
  const KEY = 'offline-study-points-v1';
  const balance = document.getElementById('balance');
  const status = document.getElementById('status');
  const reset = document.getElementById('reset');

  function getPoints() {
    try {
      const value = localStorage.getItem(KEY);
      if (value === null) return STARTING_POINTS;
      const parsed = Number(value);
      return Number.isSafeInteger(parsed) && parsed >= 0 ? parsed : STARTING_POINTS;
    } catch (_) { return STARTING_POINTS; }
  }

  function render() {
    balance.textContent = getPoints().toLocaleString('vi-VN') + ' điểm';
  }

  reset.addEventListener('click', () => {
    try {
      localStorage.setItem(KEY, String(STARTING_POINTS));
      status.textContent = 'Đã khôi phục dữ liệu mẫu.';
    } catch (_) {
      status.textContent = 'Không thể lưu trên trình duyệt; đang hiển thị giá trị mẫu.';
    }
    render();
  });

  render();
})();
