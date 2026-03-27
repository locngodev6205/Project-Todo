// === APP.JS ===
// File này sẽ được các thành viên thêm tính năng
// → Tạo ra conflict khi merge

// === THÊM TASK - thành viên C sẽ chỉnh sửa hàm này ===
function addTask() {
  const input = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Vui lòng nhập nội dung công việc!');
    return;
  }

  const li = document.createElement('li');
  li.className = 'task-item';
  li.textContent = taskText;
  taskList.appendChild(li);

  input.value = '';
}

// === XÓA TASK (chưa hoàn thành - cần implement) ===
function deleteTask(element) {
  // TODO: Thêm logic xóa task ở đây
}

// === ĐẾM SỐ TASK (chưa hoàn thành - cần implement) ===
function countTasks() {
  // TODO: Thêm logic đếm số task ở đây
}

// Enter key để thêm task
document.getElementById('taskInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
