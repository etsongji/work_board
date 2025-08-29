// Application data with improved structure
const appData = {
  "monthly_tasks": {
    "1": {
      "month_name": "1월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": "task_1_1", "editable": true},
        {"name": "기간제교원 계약", "type": "프로젝트업무", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"], "id": "task_1_2", "editable": true},
        {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_1_3", "editable": true}
      ],
      "preparation_tasks": [
        {"name": "신입생 오리엔테이션 준비", "type": "준비업무", "description": "2월 신입생 오리엔테이션 사전 준비", "id": "task_1_prep_1", "editable": true}
      ],
      "custom_tasks": []
    },
    "2": {
      "month_name": "2월", 
      "regular_tasks": [
        {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": "task_2_1", "editable": true},
        {"name": "기간제교원 계약", "type": "프로젝트업무", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"], "id": "task_2_2", "editable": true},
        {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_2_3", "editable": true}
      ],
      "special_tasks": [
        {"name": "신입생 오리엔테이션", "type": "특별업무", "description": "2월 신입생 오리엔테이션 진행", "id": "task_2_special_1", "editable": true}
      ],
      "preparation_tasks": [
        {"name": "현황판 교체 준비", "type": "준비업무", "description": "3월 현황판 교체 사전 준비", "id": "task_2_prep_1", "editable": true}
      ],
      "custom_tasks": []
    },
    "3": {
      "month_name": "3월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": "task_3_1", "editable": true},
        {"name": "기간제교원 계약", "type": "프로젝트업무", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"], "id": "task_3_2", "editable": true},
        {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_3_3", "editable": true}
      ],
      "special_tasks": [
        {"name": "현황판 교체", "type": "특별업무", "description": "3월 현황판 교체 작업", "id": "task_3_special_1", "editable": true}
      ],
      "custom_tasks": []
    },
    "4": {
      "month_name": "4월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": "task_4_1", "editable": true},
        {"name": "기간제교원 계약", "type": "프로젝트업무", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"], "id": "task_4_2", "editable": true},
        {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_4_3", "editable": true}
      ],
      "custom_tasks": []
    },
    "5": {
      "month_name": "5월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 5, "id": "task_5_1", "editable": true},
        {"name": "기간제교원 계약", "type": "프로젝트업무", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"], "id": "task_5_2", "editable": true},
        {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_5_3", "editable": true}
      ],
      "custom_tasks": []
    },
    "6": {
      "month_name": "6월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": "task_6_1", "editable": true},
        {"name": "기간제교원 계약", "type": "프로젝트업무", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"], "id": "task_6_2", "editable": true},
        {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_6_3", "editable": true}
      ],
      "custom_tasks": []
    },
    "7": {
      "month_name": "7월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": "task_7_1", "editable": true},
        {"name": "기간제교원 계약", "type": "프로젝트업무", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"], "id": "task_7_2", "editable": true},
        {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_7_3", "editable": true}
      ],
      "custom_tasks": []
    },
    "8": {
      "month_name": "8월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": "task_8_1", "editable": true},
        {"name": "기간제교원 계약", "type": "프로젝트업무", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"], "id": "task_8_2", "editable": true},
        {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_8_3", "editable": true}
      ],
      "custom_tasks": []
    },
    "9": {
      "month_name": "9월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": "task_9_1", "editable": true},
        {"name": "기간제교원 계약", "type": "프로젝트업무", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"], "id": "task_9_2", "editable": true},
        {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_9_3", "editable": true}
      ],
      "custom_tasks": []
    },
    "10": {
      "month_name": "10월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": "task_10_1", "editable": true},
        {"name": "기간제교원 계약", "type": "프로젝트업무", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"], "id": "task_10_2", "editable": true},
        {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_10_3", "editable": true}
      ],
      "preparation_tasks": [
        {"name": "수능 업무 준비", "type": "준비업무", "description": "11월 수능 관련 업무 사전 준비", "id": "task_10_prep_1", "editable": true}
      ],
      "custom_tasks": []
    },
    "11": {
      "month_name": "11월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": "task_11_1", "editable": true},
        {"name": "기간제교원 계약", "type": "프로젝트업무", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"], "id": "task_11_2", "editable": true},
        {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_11_3", "editable": true}
      ],
      "special_tasks": [
        {"name": "수능 업무", "type": "특별업무", "description": "11월 수능 관련 업무 (시험장 운영 등)", "id": "task_11_special_1", "editable": true}
      ],
      "preparation_tasks": [
        {"name": "학교평가 준비", "type": "준비업무", "description": "12월 학교평가 사전 준비", "id": "task_11_prep_1", "editable": true}
      ],
      "custom_tasks": []
    },
    "12": {
      "month_name": "12월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": "task_12_1", "editable": true},
        {"name": "기간제교원 계약", "type": "프로젝트업무", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"], "id": "task_12_2", "editable": true},
        {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_12_3", "editable": true}
      ],
      "special_tasks": [
        {"name": "학교평가", "type": "특별업무", "description": "12월 학교평가 준비 및 실시", "id": "task_12_special_1", "editable": true}
      ],
      "custom_tasks": []
    }
  },
  "teachers": [
    {"id": "T001", "name": "김영희", "subject": "국어", "grade": "1학년", "annual_leave": 21, "used_leave": 3, "remaining_leave": 18},
    {"id": "T002", "name": "박민수", "subject": "수학", "grade": "2학년", "annual_leave": 21, "used_leave": 5, "remaining_leave": 16},
    {"id": "T003", "name": "이정은", "subject": "영어", "grade": "3학년", "annual_leave": 21, "used_leave": 3, "remaining_leave": 18},
    {"id": "T004", "name": "최수진", "subject": "과학", "grade": "1학년", "annual_leave": 21, "used_leave": 5, "remaining_leave": 16},
    {"id": "T005", "name": "장기용", "subject": "사회", "grade": "2학년", "annual_leave": 21, "used_leave": 0, "remaining_leave": 21},
    {"id": "T006", "name": "윤서연", "subject": "미술", "grade": "전학년", "annual_leave": 21, "used_leave": 61, "remaining_leave": 0},
    {"id": "T007", "name": "한동민", "subject": "체육", "grade": "전학년", "annual_leave": 21, "used_leave": 0, "remaining_leave": 21},
    {"id": "T008", "name": "정혜림", "subject": "음악", "grade": "전학년", "annual_leave": 21, "used_leave": 0, "remaining_leave": 21}
  ],
  "substitute_teachers": [
    {"id": "S001", "name": "강나연", "subjects": ["국어", "사회"], "available": true, "current_assignment": null},
    {"id": "S002", "name": "임철호", "subjects": ["수학", "과학"], "available": true, "current_assignment": null},
    {"id": "S003", "name": "송미경", "subjects": ["영어"], "available": false, "current_assignment": "T003"},
    {"id": "S004", "name": "오진석", "subjects": ["체육", "미술"], "available": true, "current_assignment": null},
    {"id": "S005", "name": "안소희", "subjects": ["음악", "미술"], "available": false, "current_assignment": "T006"}
  ],
  "vacations": [
    {
      "id": "V001", "teacher_id": "T001", "teacher_name": "김영희", "vacation_type": "연가", "start_date": "2025-03-15", "end_date": "2025-03-17", "days": 3, "substitute_teacher_id": "S001", "substitute_teacher_name": "강나연", "status": "승인", "reason": "개인사정"
    },
    {
      "id": "V002", "teacher_id": "T002", "teacher_name": "박민수", "vacation_type": "병가", "start_date": "2025-05-20", "end_date": "2025-05-24", "days": 5, "substitute_teacher_id": "S002", "substitute_teacher_name": "임철호", "status": "승인", "reason": "치료"
    },
    {
      "id": "V003", "teacher_id": "T003", "teacher_name": "이정은", "vacation_type": "특별휴가", "start_date": "2025-07-10", "end_date": "2025-07-12", "days": 3, "substitute_teacher_id": "S003", "substitute_teacher_name": "송미경", "status": "대기", "reason": "가족돌봄"
    },
    {
      "id": "V004", "teacher_id": "T004", "teacher_name": "최수진", "vacation_type": "연가", "start_date": "2025-09-02", "end_date": "2025-09-06", "days": 5, "substitute_teacher_id": "S002", "substitute_teacher_name": "임철호", "status": "승인", "reason": "휴식"
    },
    {
      "id": "V005", "teacher_id": "T006", "teacher_name": "윤서연", "vacation_type": "출산휴가", "start_date": "2025-11-01", "end_date": "2025-12-31", "days": 61, "substitute_teacher_id": "S005", "substitute_teacher_name": "안소희", "status": "승인", "reason": "출산"
    }
  ],
  "vacation_types": ["연가", "병가", "특별휴가", "출산휴가", "공가", "경조휴가"],
  "task_types": ["정기업무", "특별업무", "준비업무", "프로젝트업무"]
};

// Global state
let currentMonth = 1;
let currentCalendarMonth = 1;
let currentActiveTab = 'task-management';
let currentVacationView = 'calendar';
let taskStates = {};
let editingTaskData = null;
let editingVacationId = null;
let taskIdCounter = 1000;
let undoStack = [];

// Message system
function showMessage(text, type = 'success') {
  const container = document.getElementById('message-container');
  const message = document.getElementById('message');
  
  if (container && message) {
    message.textContent = text;
    message.className = `message ${type}`;
    container.classList.remove('hidden');
    
    setTimeout(() => {
      container.classList.add('hidden');
    }, 3000);
  }
}

// Confirmation dialog
function showConfirmDialog(title, message, onConfirm, onCancel = null) {
  const dialog = document.getElementById('confirm-dialog');
  const titleEl = document.getElementById('confirm-title');
  const messageEl = document.getElementById('confirm-message');
  const okBtn = document.getElementById('confirm-ok-btn');
  const cancelBtn = document.getElementById('confirm-cancel-btn');
  
  if (dialog && titleEl && messageEl && okBtn && cancelBtn) {
    titleEl.textContent = title;
    messageEl.textContent = message;
    
    dialog.classList.remove('hidden');
    
    const handleOk = () => {
      dialog.classList.add('hidden');
      okBtn.removeEventListener('click', handleOk);
      cancelBtn.removeEventListener('click', handleCancel);
      if (onConfirm) onConfirm();
    };
    
    const handleCancel = () => {
      dialog.classList.add('hidden');
      okBtn.removeEventListener('click', handleOk);
      cancelBtn.removeEventListener('click', handleCancel);
      if (onCancel) onCancel();
    };
    
    okBtn.addEventListener('click', handleOk);
    cancelBtn.addEventListener('click', handleCancel);
  }
}

// Generate unique task ID
function generateTaskId() {
  return `custom_task_${Date.now()}_${taskIdCounter++}`;
}

// Initialize custom_tasks array for all months if not exists
function initializeCustomTasks() {
  for (let month = 1; month <= 12; month++) {
    const monthStr = month.toString();
    if (!appData.monthly_tasks[monthStr].custom_tasks) {
      appData.monthly_tasks[monthStr].custom_tasks = [];
    }
  }
}

// Initialize task states
function initializeTaskStates() {
  for (let month = 1; month <= 12; month++) {
    taskStates[month] = {};
    const monthData = appData.monthly_tasks[month.toString()];
    
    // Initialize all task categories
    ['regular_tasks', 'special_tasks', 'preparation_tasks', 'custom_tasks'].forEach(category => {
      if (monthData[category]) {
        monthData[category].forEach((task) => {
          const taskId = task.id;
          taskStates[month][taskId] = {
            completed: false,
            subtasks: {}
          };
          
          if (task.weeks) {
            for (let week = 1; week <= task.weeks; week++) {
              taskStates[month][taskId].subtasks[`week_${week}`] = false;
            }
          }
          
          if (task.steps) {
            task.steps.forEach((step, stepIndex) => {
              taskStates[month][taskId].subtasks[`step_${stepIndex}`] = false;
            });
          }
        });
      }
    });
  }
}

// Calculate progress for a specific month
function calculateMonthProgress(month) {
  const monthState = taskStates[month];
  if (!monthState) return 0;
  
  let totalItems = 0;
  let completedItems = 0;
  
  Object.keys(monthState).forEach(taskId => {
    const task = monthState[taskId];
    if (!task) return;
    
    const subtaskKeys = Object.keys(task.subtasks || {});
    
    if (subtaskKeys.length > 0) {
      subtaskKeys.forEach(subtaskKey => {
        totalItems++;
        if (task.subtasks[subtaskKey]) {
          completedItems++;
        }
      });
    } else {
      totalItems++;
      if (task.completed) {
        completedItems++;
      }
    }
  });
  
  return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
}

// Calculate overall progress
function calculateOverallProgress() {
  let totalProgress = 0;
  for (let month = 1; month <= 12; month++) {
    totalProgress += calculateMonthProgress(month);
  }
  return Math.round(totalProgress / 12);
}

// Update progress displays
function updateProgress() {
  const monthlyProgress = calculateMonthProgress(currentMonth);
  const overallProgress = calculateOverallProgress();
  
  const monthlyFill = document.getElementById('monthly-progress-fill');
  const monthlyText = document.getElementById('monthly-progress-text');
  if (monthlyFill && monthlyText) {
    monthlyFill.style.width = `${monthlyProgress}%`;
    monthlyText.textContent = `${monthlyProgress}%`;
  }
  
  const overallFill = document.getElementById('overall-progress-fill');
  const overallText = document.getElementById('overall-progress-text');
  if (overallFill && overallText) {
    overallFill.style.width = `${overallProgress}%`;
    overallText.textContent = `${overallProgress}%`;
  }
}

// Toggle task completion
function toggleTaskCompletion(month, taskId, subtaskKey = null) {
  if (!taskStates[month] || !taskStates[month][taskId]) {
    console.warn(`Task state not found: month ${month}, taskId ${taskId}`);
    return;
  }

  if (subtaskKey) {
    taskStates[month][taskId].subtasks[subtaskKey] = !taskStates[month][taskId].subtasks[subtaskKey];
    
    const subtasks = taskStates[month][taskId].subtasks;
    const subtaskKeys = Object.keys(subtasks);
    const allCompleted = subtaskKeys.length > 0 && subtaskKeys.every(key => subtasks[key]);
    taskStates[month][taskId].completed = allCompleted;
  } else {
    taskStates[month][taskId].completed = !taskStates[month][taskId].completed;
    
    if (taskStates[month][taskId].completed && Object.keys(taskStates[month][taskId].subtasks).length > 0) {
      Object.keys(taskStates[month][taskId].subtasks).forEach(key => {
        taskStates[month][taskId].subtasks[key] = true;
      });
    } else if (!taskStates[month][taskId].completed && Object.keys(taskStates[month][taskId].subtasks).length > 0) {
      Object.keys(taskStates[month][taskId].subtasks).forEach(key => {
        taskStates[month][taskId].subtasks[key] = false;
      });
    }
  }
  
  renderTasks(currentMonth);
  updateProgress();
}

// Find task by ID across all categories
function findTaskById(month, taskId) {
  const monthData = appData.monthly_tasks[month.toString()];
  
  const categories = ['regular_tasks', 'special_tasks', 'preparation_tasks', 'custom_tasks'];
  
  for (const category of categories) {
    if (monthData[category]) {
      const task = monthData[category].find(t => t.id === taskId);
      if (task) return { task, category };
    }
  }
  
  return null;
}

// Enhanced delete task function with undo functionality
function deleteTask(month, taskId) {
  const result = findTaskById(month, taskId);
  if (!result) {
    showMessage('업무를 찾을 수 없습니다.', 'error');
    return;
  }
  
  const { task, category } = result;
  
  showConfirmDialog(
    '업무 삭제',
    `정말로 '${task.name}' 업무를 삭제하시겠습니까?`,
    () => {
      // Store undo information
      const undoInfo = {
        action: 'delete',
        month: month,
        taskId: taskId,
        task: { ...task },
        category: category,
        taskState: { ...taskStates[month][taskId] },
        timestamp: Date.now()
      };
      
      // Remove from data
      const monthData = appData.monthly_tasks[month.toString()];
      const index = monthData[category].findIndex(t => t.id === taskId);
      if (index !== -1) {
        monthData[category].splice(index, 1);
      }
      
      // Remove from task states
      if (taskStates[month] && taskStates[month][taskId]) {
        delete taskStates[month][taskId];
      }
      
      // Add to undo stack
      undoStack.push(undoInfo);
      if (undoStack.length > 10) { // Keep only last 10 actions
        undoStack.shift();
      }
      
      renderTasks(currentMonth);
      updateProgress();
      showMessage('업무가 삭제되었습니다.', 'success');
    }
  );
}

// Enhanced edit task function
function editTask(month, taskId) {
  // Remove editing class from other tasks
  document.querySelectorAll('.task-card.editing').forEach(card => {
    card.classList.remove('editing');
  });
  
  const result = findTaskById(month, taskId);
  if (!result) {
    showMessage('업무를 찾을 수 없습니다.', 'error');
    return;
  }
  
  const { task } = result;
  
  // Add editing class to current task
  const taskCard = document.querySelector(`[data-task-id="${taskId}"]`);
  if (taskCard) {
    taskCard.classList.add('editing');
  }
  
  // Find all months that have this task (by name and type)
  const taskMonths = [];
  for (let m = 1; m <= 12; m++) {
    const monthData = appData.monthly_tasks[m.toString()];
    ['regular_tasks', 'special_tasks', 'preparation_tasks', 'custom_tasks'].forEach(cat => {
      if (monthData[cat]) {
        const foundTask = monthData[cat].find(t => t.name === task.name && t.type === task.type);
        if (foundTask) {
          taskMonths.push(m);
        }
      }
    });
  }
  
  editingTaskData = { 
    ...task, 
    originalId: taskId, 
    months: taskMonths.length > 0 ? taskMonths : [month]
  };
  
  openTaskModal(editingTaskData);
}

// Duplicate task to other months
function duplicateTask(month, taskId) {
  const result = findTaskById(month, taskId);
  if (!result) {
    showMessage('업무를 찾을 수 없습니다.', 'error');
    return;
  }
  
  const { task } = result;
  const duplicateData = { 
    ...task, 
    id: undefined, // Will be generated as new custom task
    months: [month] 
  };
  
  openTaskModal(duplicateData);
}

// Get task type CSS class
function getTaskTypeClass(type) {
  return type || 'default';
}

// Render tasks for a specific month
function renderTasks(month) {
  const monthData = appData.monthly_tasks[month.toString()];
  const taskContent = document.getElementById('task-content');
  
  if (!monthData) {
    taskContent.innerHTML = '<p class="no-data">해당 월의 업무 데이터가 없습니다.</p>';
    return;
  }
  
  let html = '';
  
  // Helper function to render task card
  function renderTaskCard(task, taskId, sectionType = '') {
    const taskState = taskStates[month][taskId];
    if (!taskState) return '';
    
    const isCompleted = taskState.completed;
    const isEditable = task.editable !== false;
    
    let cardHtml = `
      <div class="task-card ${isCompleted ? 'completed' : ''}" data-task-id="${taskId}">
        <div class="task-header">
          <div class="task-checkbox ${isCompleted ? 'checked' : ''}" 
               data-month="${month}" data-task="${taskId}"></div>
          <h5 class="task-title">${task.name}</h5>
          <span class="task-type-badge task-type-${getTaskTypeClass(task.type)}">
            ${task.type || '일반'}
          </span>
        </div>
        <p class="task-description">${task.description || ''}</p>
    `;
    
    // Task actions for all tasks (not just custom ones)
    cardHtml += `
      <div class="task-actions">
        <button class="btn-task-action btn-task-edit" data-month="${month}" data-task="${taskId}" title="편집"></button>
        <button class="btn-task-action btn-task-duplicate" data-month="${month}" data-task="${taskId}" title="복제"></button>`;
    
    // Only show delete button for custom tasks
    if (sectionType === 'custom') {
      cardHtml += `<button class="btn-task-action btn-task-delete" data-month="${month}" data-task="${taskId}" title="삭제"></button>`;
    }
    
    cardHtml += `</div>`;
    
    // Weekly subtasks
    if (task.weeks) {
      cardHtml += '<div class="weekly-checklist">';
      for (let week = 1; week <= task.weeks; week++) {
        const subtaskKey = `week_${week}`;
        const isSubtaskCompleted = taskState.subtasks[subtaskKey];
        cardHtml += `
          <div class="week-item">
            <div class="week-checkbox ${isSubtaskCompleted ? 'checked' : ''}" 
                 data-month="${month}" data-task="${taskId}" data-subtask="${subtaskKey}"></div>
            <span class="week-label">${week}주차</span>
          </div>
        `;
      }
      cardHtml += '</div>';
    }
    
    // Steps
    if (task.steps && task.steps.length > 0) {
      cardHtml += '<div class="contract-steps">';
      task.steps.forEach((step, stepIndex) => {
        const subtaskKey = `step_${stepIndex}`;
        const isStepCompleted = taskState.subtasks[subtaskKey];
        cardHtml += `
          <div class="contract-step ${isStepCompleted ? 'completed' : ''}">
            <div class="step-number">${stepIndex + 1}</div>
            <div class="step-checkbox ${isStepCompleted ? 'checked' : ''}" 
                 data-month="${month}" data-task="${taskId}" data-subtask="${subtaskKey}"></div>
            <span class="step-label">${step}</span>
          </div>
        `;
      });
      cardHtml += '</div>';
    }
    
    cardHtml += '</div>';
    return cardHtml;
  }
  
  // Regular tasks
  if (monthData.regular_tasks && monthData.regular_tasks.length > 0) {
    html += '<div class="task-section"><h4>정기 업무</h4>';
    monthData.regular_tasks.forEach((task) => {
      html += renderTaskCard(task, task.id, 'regular');
    });
    html += '</div>';
  }
  
  // Special tasks
  if (monthData.special_tasks && monthData.special_tasks.length > 0) {
    html += '<div class="task-section"><h4>특별 업무</h4>';
    monthData.special_tasks.forEach((task) => {
      html += renderTaskCard(task, task.id, 'special');
    });
    html += '</div>';
  }
  
  // Preparation tasks
  if (monthData.preparation_tasks && monthData.preparation_tasks.length > 0) {
    html += '<div class="task-section"><h4>준비 업무</h4>';
    monthData.preparation_tasks.forEach((task) => {
      html += renderTaskCard(task, task.id, 'preparation');
    });
    html += '</div>';
  }
  
  // Custom tasks
  if (monthData.custom_tasks && monthData.custom_tasks.length > 0) {
    html += '<div class="task-section"><h4>추가 업무</h4>';
    monthData.custom_tasks.forEach((task) => {
      html += renderTaskCard(task, task.id, 'custom');
    });
    html += '</div>';
  }
  
  if (html === '') {
    html = '<p class="no-data">이번 달에는 등록된 업무가 없습니다.</p>';
  }
  
  taskContent.innerHTML = html;
  
  // Re-attach event listeners after rendering
  setTimeout(() => {
    addTaskEventListeners();
  }, 10);
}

// Add event listeners to task elements
function addTaskEventListeners() {
  // Task checkboxes
  document.querySelectorAll('.task-checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const month = parseInt(this.dataset.month);
      const taskId = this.dataset.task;
      toggleTaskCompletion(month, taskId);
    });
  });
  
  // Week checkboxes
  document.querySelectorAll('.week-checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const month = parseInt(this.dataset.month);
      const taskId = this.dataset.task;
      const subtaskKey = this.dataset.subtask;
      toggleTaskCompletion(month, taskId, subtaskKey);
    });
  });
  
  // Step checkboxes
  document.querySelectorAll('.step-checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const month = parseInt(this.dataset.month);
      const taskId = this.dataset.task;
      const subtaskKey = this.dataset.subtask;
      toggleTaskCompletion(month, taskId, subtaskKey);
    });
  });

  // Task action buttons
  document.querySelectorAll('.btn-task-edit').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const month = parseInt(this.dataset.month);
      const taskId = this.dataset.task;
      editTask(month, taskId);
    });
  });

  document.querySelectorAll('.btn-task-delete').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const month = parseInt(this.dataset.month);
      const taskId = this.dataset.task;
      deleteTask(month, taskId);
    });
  });

  document.querySelectorAll('.btn-task-duplicate').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const month = parseInt(this.dataset.month);
      const taskId = this.dataset.task;
      duplicateTask(month, taskId);
    });
  });
}

// Switch to a different month for tasks
function switchMonth(month) {
  currentMonth = month;
  
  document.querySelectorAll('.month-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  const activeTab = document.querySelector(`.month-tab[data-month="${month}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }
  
  const monthName = appData.monthly_tasks[month.toString()].month_name;
  const monthlyTitle = document.getElementById('monthly-title');
  if (monthlyTitle) {
    monthlyTitle.textContent = `${monthName} 진척률`;
  }
  
  renderTasks(month);
  updateProgress();
}

// Task Modal Functions
function openTaskModal(editingTask = null) {
  const modal = document.getElementById('task-modal');
  if (!modal) return;
  
  const form = document.getElementById('task-form');
  const title = document.getElementById('task-modal-title');
  
  if (editingTask) {
    if (title) title.textContent = editingTask.originalId ? '업무 수정' : '업무 복제';
    populateTaskForm(editingTask);
  } else {
    if (title) title.textContent = '업무 추가';
    if (form) form.reset();
    // Set current month as default selected
    const monthCheckboxes = document.querySelectorAll('.month-checkboxes input[type="checkbox"]');
    monthCheckboxes.forEach(checkbox => {
      checkbox.checked = parseInt(checkbox.value) === currentMonth;
    });
    // Add default step
    resetStepsContainer();
  }
  
  updateTaskFormVisibility();
  modal.classList.remove('hidden');
  
  // Focus on the first input
  setTimeout(() => {
    const firstInput = modal.querySelector('input, select, textarea');
    if (firstInput) firstInput.focus();
  }, 100);
}

function closeTaskModal() {
  const modal = document.getElementById('task-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
  
  // Remove editing classes
  document.querySelectorAll('.task-card.editing').forEach(card => {
    card.classList.remove('editing');
  });
  
  editingTaskData = null;
}

function populateTaskForm(task) {
  const taskName = document.getElementById('task-name');
  const taskType = document.getElementById('task-type');
  const taskDescription = document.getElementById('task-description');
  const weeksCount = document.getElementById('weeks-count');
  
  if (taskName) taskName.value = task.name || '';
  if (taskType) taskType.value = task.type || '';
  if (taskDescription) taskDescription.value = task.description || '';
  if (weeksCount) weeksCount.value = task.weeks || 4;
  
  // Set month checkboxes
  const monthCheckboxes = document.querySelectorAll('.month-checkboxes input[type="checkbox"]');
  monthCheckboxes.forEach(checkbox => {
    checkbox.checked = task.months ? task.months.includes(parseInt(checkbox.value)) : false;
  });
  
  // Populate steps
  if (task.steps && task.steps.length > 0) {
    populateStepsContainer(task.steps);
  } else {
    resetStepsContainer();
  }
}

function resetStepsContainer() {
  const stepsContainer = document.getElementById('steps-container');
  if (stepsContainer) {
    stepsContainer.innerHTML = `
      <div class="step-input">
        <input type="text" class="form-control step-text" placeholder="1단계 내용을 입력하세요">
        <button type="button" class="btn-remove-step">×</button>
      </div>
    `;
    const removeButton = stepsContainer.querySelector('.btn-remove-step');
    if (removeButton) {
      removeButton.addEventListener('click', function() {
        removeStep(this);
      });
    }
  }
}

function populateStepsContainer(steps) {
  const stepsContainer = document.getElementById('steps-container');
  if (!stepsContainer) return;
  
  let html = '';
  steps.forEach((step, index) => {
    html += `
      <div class="step-input">
        <input type="text" class="form-control step-text" placeholder="${index + 1}단계 내용을 입력하세요" value="${step}">
        <button type="button" class="btn-remove-step">×</button>
      </div>
    `;
  });
  
  stepsContainer.innerHTML = html;
  
  stepsContainer.querySelectorAll('.btn-remove-step').forEach(button => {
    button.addEventListener('click', function() {
      removeStep(this);
    });
  });
}

function updateTaskFormVisibility() {
  const taskType = document.getElementById('task-type');
  const weeklyConfig = document.getElementById('weekly-config');
  
  if (taskType && weeklyConfig) {
    const selectedType = taskType.value;
    weeklyConfig.style.display = (selectedType === '정기업무') ? 'block' : 'none';
  }
}

function addStep() {
  const stepsContainer = document.getElementById('steps-container');
  if (!stepsContainer) return;
  
  const stepCount = stepsContainer.children.length + 1;
  const stepDiv = document.createElement('div');
  stepDiv.className = 'step-input';
  stepDiv.innerHTML = `
    <input type="text" class="form-control step-text" placeholder="${stepCount}단계 내용을 입력하세요">
    <button type="button" class="btn-remove-step">×</button>
  `;
  
  const removeButton = stepDiv.querySelector('.btn-remove-step');
  removeButton.addEventListener('click', function() {
    removeStep(this);
  });
  
  stepsContainer.appendChild(stepDiv);
}

function removeStep(button) {
  const stepsContainer = document.getElementById('steps-container');
  if (stepsContainer && stepsContainer.children.length > 1) {
    button.parentElement.remove();
  }
}

function saveTask() {
  const taskName = document.getElementById('task-name');
  const taskType = document.getElementById('task-type');
  const taskDescription = document.getElementById('task-description');
  const weeksCount = document.getElementById('weeks-count');
  
  if (!taskName || !taskType) {
    showMessage('필수 요소를 찾을 수 없습니다.', 'error');
    return;
  }
  
  const name = taskName.value.trim();
  const type = taskType.value;
  const description = taskDescription ? taskDescription.value.trim() : '';
  const weeks = weeksCount ? parseInt(weeksCount.value) : null;
  
  if (!name || !type) {
    showMessage('업무명과 업무 유형은 필수 항목입니다.', 'error');
    return;
  }
  
  // Get selected months
  const monthCheckboxes = document.querySelectorAll('.month-checkboxes input[type="checkbox"]:checked');
  const selectedMonths = Array.from(monthCheckboxes).map(cb => parseInt(cb.value));
  
  if (selectedMonths.length === 0) {
    showMessage('적용할 월을 하나 이상 선택해주세요.', 'error');
    return;
  }
  
  // Get steps
  const stepInputs = document.querySelectorAll('.step-text');
  const steps = Array.from(stepInputs)
    .map(input => input.value.trim())
    .filter(step => step.length > 0);
  
  const taskData = {
    id: editingTaskData && editingTaskData.originalId ? editingTaskData.originalId : generateTaskId(),
    name,
    type,
    description,
    weeks: (type === '정기업무' && weeks) ? weeks : undefined,
    steps: steps.length > 0 ? steps : undefined,
    editable: true
  };
  
  try {
    if (editingTaskData && editingTaskData.originalId) {
      // Update existing task
      updateTaskInMonths(taskData, selectedMonths, editingTaskData.originalId);
      showMessage('업무가 수정되었습니다.', 'success');
    } else {
      // Add new task (including duplicated tasks)
      addTaskToMonths(taskData, selectedMonths);
      showMessage('업무가 추가되었습니다.', 'success');
    }
    
    closeTaskModal();
    renderTasks(currentMonth);
    updateProgress();
  } catch (error) {
    console.error('Error saving task:', error);
    showMessage('업무 저장 중 오류가 발생했습니다.', 'error');
  }
}

function addTaskToMonths(taskData, months) {
  months.forEach(month => {
    const monthData = appData.monthly_tasks[month.toString()];
    if (!monthData.custom_tasks) {
      monthData.custom_tasks = [];
    }
    
    monthData.custom_tasks.push({ ...taskData });
    
    // Initialize task state
    taskStates[month][taskData.id] = {
      completed: false,
      subtasks: {}
    };
    
    // Initialize subtasks
    if (taskData.weeks) {
      for (let week = 1; week <= taskData.weeks; week++) {
        taskStates[month][taskData.id].subtasks[`week_${week}`] = false;
      }
    }
    
    if (taskData.steps) {
      taskData.steps.forEach((step, index) => {
        taskStates[month][taskData.id].subtasks[`step_${index}`] = false;
      });
    }
  });
}

function updateTaskInMonths(taskData, months, originalId) {
  // Remove task from all months first
  for (let month = 1; month <= 12; month++) {
    const monthData = appData.monthly_tasks[month.toString()];
    ['custom_tasks', 'regular_tasks', 'special_tasks', 'preparation_tasks'].forEach(category => {
      if (monthData[category]) {
        const index = monthData[category].findIndex(task => task.id === originalId);
        if (index !== -1) {
          monthData[category].splice(index, 1);
        }
      }
    });
    
    if (taskStates[month] && taskStates[month][originalId]) {
      delete taskStates[month][originalId];
    }
  }
  
  // Add updated task to selected months
  addTaskToMonths(taskData, months);
}

// Basic vacation functions
function updateVacationStats() {
  const totalTeachers = appData.teachers.length;
  const currentDate = new Date();
  const currentVacations = appData.vacations.filter(v => {
    const startDate = new Date(v.start_date);
    const endDate = new Date(v.end_date);
    return v.status === '승인' && startDate <= currentDate && endDate >= currentDate;
  }).length;
  
  const pendingApplications = appData.vacations.filter(v => v.status === '대기').length;
  const availableSubstitutes = appData.substitute_teachers.filter(s => s.available).length;
  
  const elements = {
    'total-teachers': totalTeachers,
    'current-vacations': currentVacations,
    'pending-applications': pendingApplications,
    'available-substitutes': availableSubstitutes
  };
  
  Object.entries(elements).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });
}

function renderCalendarView() {
  const monthVacations = appData.vacations.filter(vacation => {
    const startDate = new Date(vacation.start_date);
    return startDate.getMonth() + 1 === currentCalendarMonth;
  });
  
  const calendarList = document.getElementById('calendar-list');
  if (!calendarList) return;
  
  if (monthVacations.length === 0) {
    calendarList.innerHTML = '<p class="no-data">이번 달에는 등록된 휴가가 없습니다.</p>';
    return;
  }
  
  let html = '';
  monthVacations.forEach(vacation => {
    const startDate = new Date(vacation.start_date);
    const endDate = new Date(vacation.end_date);
    const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
    
    html += `
      <div class="vacation-item type-${vacation.vacation_type}">
        <div class="vacation-info">
          <div class="vacation-teacher">${vacation.teacher_name}</div>
          <div class="vacation-details">
            ${vacation.vacation_type} | ${formatDate(startDate)} - ${formatDate(endDate)} (${vacation.days}일)
            <br>대체교사: ${vacation.substitute_teacher_name} | 사유: ${vacation.reason}
          </div>
        </div>
        <div class="vacation-status ${vacation.status}">${vacation.status}</div>
      </div>
    `;
  });
  
  calendarList.innerHTML = html;
}

function renderTableView() {
  // Teacher table
  const teacherTableBody = document.getElementById('teacher-table-body');
  if (teacherTableBody) {
    let html = '';
    appData.teachers.forEach(teacher => {
      const currentVacation = appData.vacations.find(v => 
        v.teacher_id === teacher.id && 
        v.status === '승인' && 
        new Date(v.start_date) <= new Date() && 
        new Date(v.end_date) >= new Date()
      );
      
      const status = currentVacation ? '휴가중' : '정상근무';
      
      html += `
        <tr>
          <td>${teacher.name}</td>
          <td>${teacher.subject}</td>
          <td>${teacher.grade}</td>
          <td>${teacher.annual_leave}</td>
          <td>${teacher.used_leave}</td>
          <td>${teacher.remaining_leave}</td>
          <td><span class="teacher-status ${status}">${status}</span></td>
        </tr>
      `;
    });
    teacherTableBody.innerHTML = html;
  }

  // Vacation table
  const vacationTableBody = document.getElementById('vacation-table-body');
  if (vacationTableBody) {
    let html = '';
    appData.vacations.forEach(vacation => {
      const startDate = new Date(vacation.start_date);
      const endDate = new Date(vacation.end_date);
      
      html += `
        <tr>
          <td>${vacation.teacher_name}</td>
          <td>${vacation.vacation_type}</td>
          <td>${startDate.toLocaleDateString()} ~ ${endDate.toLocaleDateString()}</td>
          <td>${vacation.days}일</td>
          <td>${vacation.substitute_teacher_name}</td>
          <td><span class="vacation-status ${vacation.status}">${vacation.status}</span></td>
          <td>
            <div class="action-btns">
              <button class="btn-edit" onclick="editVacation('${vacation.id}')">수정</button>
              <button class="btn-delete" onclick="deleteVacation('${vacation.id}')">삭제</button>
            </div>
          </td>
        </tr>
      `;
    });
    vacationTableBody.innerHTML = html;
  }
}

function renderSubstitutesView() {
  const substitutesGrid = document.querySelector('.substitutes-grid');
  if (!substitutesGrid) return;
  
  let html = '';
  appData.substitute_teachers.forEach(substitute => {
    const availabilityClass = substitute.available ? 'available' : 'busy';
    const availabilityText = substitute.available ? '가용' : '배정중';
    
    html += `
      <div class="substitute-card ${availabilityClass}">
        <div class="substitute-header">
          <h4 class="substitute-name">${substitute.name}</h4>
          <span class="availability-badge ${availabilityClass}">${availabilityText}</span>
        </div>
        <div class="substitute-subjects">담당과목: ${substitute.subjects.join(', ')}</div>
        ${substitute.current_assignment ? 
          `<div class="current-assignment">현재 배정: ${substitute.current_assignment}</div>` : 
          ''
        }
      </div>
    `;
  });
  
  substitutesGrid.innerHTML = html;
}

function switchCalendarMonth(month) {
  currentCalendarMonth = month;
  
  document.querySelectorAll('.calendar-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  const activeTab = document.querySelector(`.calendar-tab[data-month="${month}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }
  
  const titleEl = document.getElementById('calendar-month-title');
  if (titleEl) {
    titleEl.textContent = `${month}월 휴가 현황`;
  }
  
  renderCalendarView();
}

function switchVacationView(view) {
  currentVacationView = view;
  
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`[data-view="${view}"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
  
  document.querySelectorAll('.vacation-view').forEach(viewEl => {
    viewEl.classList.remove('active');
  });
  const activeView = document.getElementById(`${view}-view`);
  if (activeView) {
    activeView.classList.add('active');
  }
  
  if (view === 'calendar') {
    renderCalendarView();
  } else if (view === 'table') {
    renderTableView();
  } else if (view === 'substitutes') {
    renderSubstitutesView();
  }
}

function switchMainTab(tab) {
  currentActiveTab = tab;
  
  document.querySelectorAll('.main-nav-tab').forEach(tabEl => {
    tabEl.classList.remove('active');
  });
  const activeTab = document.querySelector(`[data-tab="${tab}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }
  
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  const activeContent = document.getElementById(tab);
  if (activeContent) {
    activeContent.classList.add('active');
  }
  
  if (tab === 'vacation-management') {
    updateVacationStats();
    switchVacationView(currentVacationView);
  }
}

// Keyboard shortcuts
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', function(e) {
    // ESC key - close modals or cancel editing
    if (e.key === 'Escape') {
      const taskModal = document.getElementById('task-modal');
      const vacationModal = document.getElementById('vacation-modal');
      const confirmDialog = document.getElementById('confirm-dialog');
      
      if (taskModal && !taskModal.classList.contains('hidden')) {
        closeTaskModal();
        e.preventDefault();
      } else if (vacationModal && !vacationModal.classList.contains('hidden')) {
        closeVacationModal();
        e.preventDefault();
      } else if (confirmDialog && !confirmDialog.classList.contains('hidden')) {
        confirmDialog.classList.add('hidden');
        e.preventDefault();
      }
    }
    
    // Ctrl+S - save current form
    if (e.ctrlKey && e.key === 's') {
      const taskModal = document.getElementById('task-modal');
      if (taskModal && !taskModal.classList.contains('hidden')) {
        saveTask();
        e.preventDefault();
      }
    }
    
    // Enter key in form fields
    if (e.key === 'Enter' && e.target.tagName === 'INPUT' && e.target.type === 'text') {
      const taskModal = document.getElementById('task-modal');
      if (taskModal && !taskModal.classList.contains('hidden')) {
        saveTask();
        e.preventDefault();
      }
    }
  });
}

// Vacation modal functions (basic implementation)
function openVacationModal(vacationId = null) {
  const modal = document.getElementById('vacation-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function closeVacationModal() {
  const modal = document.getElementById('vacation-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function editVacation(vacationId) {
  openVacationModal(vacationId);
}

function deleteVacation(vacationId) {
  showConfirmDialog(
    '휴가 삭제',
    '정말로 이 휴가 신청을 삭제하시겠습니까?',
    () => {
      const index = appData.vacations.findIndex(v => v.id === vacationId);
      if (index !== -1) {
        appData.vacations.splice(index, 1);
        updateVacationStats();
        switchVacationView(currentVacationView);
        showMessage('휴가 신청이 삭제되었습니다.', 'success');
      }
    }
  );
}

// Initialize the application
function initializeApp() {
  console.log('Initializing application...');
  
  initializeCustomTasks();
  initializeTaskStates();
  setupKeyboardShortcuts();
  
  // Main navigation tabs
  document.querySelectorAll('.main-nav-tab').forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const tabName = this.dataset.tab;
      if (tabName) {
        switchMainTab(tabName);
      }
    });
  });
  
  // Month tabs for tasks
  document.querySelectorAll('.month-tab').forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const month = parseInt(this.dataset.month);
      if (month) {
        switchMonth(month);
      }
    });
  });
  
  // Calendar tabs for vacation
  document.querySelectorAll('.calendar-tab').forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const month = parseInt(this.dataset.month);
      if (month) {
        switchCalendarMonth(month);
      }
    });
  });
  
  // View buttons for vacation
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const view = this.dataset.view;
      if (view) {
        switchVacationView(view);
      }
    });
  });
  
  // Add Task Button
  const addTaskBtn = document.getElementById('add-task-btn');
  if (addTaskBtn) {
    addTaskBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Add task button clicked');
      openTaskModal();
    });
  }
  
  // Task Modal controls
  const taskModalCloseBtn = document.getElementById('task-modal-close-btn');
  if (taskModalCloseBtn) {
    taskModalCloseBtn.addEventListener('click', function(e) {
      e.preventDefault();
      closeTaskModal();
    });
  }
  
  const taskCancelBtn = document.getElementById('task-cancel-btn');
  if (taskCancelBtn) {
    taskCancelBtn.addEventListener('click', function(e) {
      e.preventDefault();
      closeTaskModal();
    });
  }
  
  const saveTaskBtn = document.getElementById('save-task-btn');
  if (saveTaskBtn) {
    saveTaskBtn.addEventListener('click', function(e) {
      e.preventDefault();
      saveTask();
    });
  }
  
  // Task type change handler
  const taskTypeSelect = document.getElementById('task-type');
  if (taskTypeSelect) {
    taskTypeSelect.addEventListener('change', updateTaskFormVisibility);
  }
  
  // Add step button
  const addStepBtn = document.querySelector('.btn-add-step');
  if (addStepBtn) {
    addStepBtn.addEventListener('click', function(e) {
      e.preventDefault();
      addStep();
    });
  }
  
  // Vacation modal controls
  const vacationModalCloseBtn = document.getElementById('vacation-modal-close-btn');
  if (vacationModalCloseBtn) {
    vacationModalCloseBtn.addEventListener('click', function(e) {
      e.preventDefault();
      closeVacationModal();
    });
  }
  
  const vacationCancelBtn = document.getElementById('vacation-cancel-btn');
  if (vacationCancelBtn) {
    vacationCancelBtn.addEventListener('click', function(e) {
      e.preventDefault();
      closeVacationModal();
    });
  }
  
  const addVacationBtn = document.getElementById('add-vacation-btn');
  if (addVacationBtn) {
    addVacationBtn.addEventListener('click', function(e) {
      e.preventDefault();
      openVacationModal();
    });
  }
  
  // Modal overlay click to close
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
      const taskModal = document.getElementById('task-modal');
      const vacationModal = document.getElementById('vacation-modal');
      const confirmDialog = document.getElementById('confirm-dialog');
      
      if (taskModal && !taskModal.classList.contains('hidden')) {
        closeTaskModal();
      }
      if (vacationModal && !vacationModal.classList.contains('hidden')) {
        closeVacationModal();
      }
      if (confirmDialog && !confirmDialog.classList.contains('hidden')) {
        confirmDialog.classList.add('hidden');
      }
    }
  });
  
  // Initialize views
  console.log('Setting initial views...');
  switchMonth(currentMonth);
  switchMainTab(currentActiveTab);
  
  console.log('Application initialized successfully');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded');
  initializeApp();
});