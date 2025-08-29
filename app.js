// Application data
const appData = {
  monthly_tasks: {
    "1": {
      "month_name": "1월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "weekly", "description": "매주 작성하는 업무 보고서", "weeks": 4},
        {"name": "기간제교원 계약", "type": "as_needed", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"]},
        {"name": "시간강사 수당 지급", "type": "monthly", "description": "매월 말 시간강사 수당 처리"}
      ],
      "preparation_tasks": [
        {"name": "신입생 오리엔테이션 준비", "type": "preparation", "description": "2월 신입생 오리엔테이션 사전 준비"}
      ]
    },
    "2": {
      "month_name": "2월", 
      "regular_tasks": [
        {"name": "주간업무일지", "type": "weekly", "description": "매주 작성하는 업무 보고서", "weeks": 4},
        {"name": "기간제교원 계약", "type": "as_needed", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"]},
        {"name": "시간강사 수당 지급", "type": "monthly", "description": "매월 말 시간강사 수당 처리"}
      ],
      "special_tasks": [
        {"name": "신입생 오리엔테이션", "type": "special", "description": "2월 신입생 오리엔테이션 진행"}
      ],
      "preparation_tasks": [
        {"name": "현황판 교체 준비", "type": "preparation", "description": "3월 현황판 교체 사전 준비"}
      ]
    },
    "3": {
      "month_name": "3월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "weekly", "description": "매주 작성하는 업무 보고서", "weeks": 4},
        {"name": "기간제교원 계약", "type": "as_needed", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"]},
        {"name": "시간강사 수당 지급", "type": "monthly", "description": "매월 말 시간강사 수당 처리"}
      ],
      "special_tasks": [
        {"name": "현황판 교체", "type": "special", "description": "3월 현황판 교체 작업"}
      ]
    },
    "4": {
      "month_name": "4월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "weekly", "description": "매주 작성하는 업무 보고서", "weeks": 4},
        {"name": "기간제교원 계약", "type": "as_needed", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"]},
        {"name": "시간강사 수당 지급", "type": "monthly", "description": "매월 말 시간강사 수당 처리"}
      ]
    },
    "5": {
      "month_name": "5월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "weekly", "description": "매주 작성하는 업무 보고서", "weeks": 5},
        {"name": "기간제교원 계약", "type": "as_needed", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"]},
        {"name": "시간강사 수당 지급", "type": "monthly", "description": "매월 말 시간강사 수당 처리"}
      ]
    },
    "6": {
      "month_name": "6월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "weekly", "description": "매주 작성하는 업무 보고서", "weeks": 4},
        {"name": "기간제교원 계약", "type": "as_needed", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"]},
        {"name": "시간강사 수당 지급", "type": "monthly", "description": "매월 말 시간강사 수당 처리"}
      ]
    },
    "7": {
      "month_name": "7월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "weekly", "description": "매주 작성하는 업무 보고서", "weeks": 4},
        {"name": "기간제교원 계약", "type": "as_needed", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"]},
        {"name": "시간강사 수당 지급", "type": "monthly", "description": "매월 말 시간강사 수당 처리"}
      ]
    },
    "8": {
      "month_name": "8월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "weekly", "description": "매주 작성하는 업무 보고서", "weeks": 4},
        {"name": "기간제교원 계약", "type": "as_needed", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"]},
        {"name": "시간강사 수당 지급", "type": "monthly", "description": "매월 말 시간강사 수당 처리"}
      ]
    },
    "9": {
      "month_name": "9월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "weekly", "description": "매주 작성하는 업무 보고서", "weeks": 4},
        {"name": "기간제교원 계약", "type": "as_needed", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"]},
        {"name": "시간강사 수당 지급", "type": "monthly", "description": "매월 말 시간강사 수당 처리"}
      ]
    },
    "10": {
      "month_name": "10월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "weekly", "description": "매주 작성하는 업무 보고서", "weeks": 4},
        {"name": "기간제교원 계약", "type": "as_needed", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"]},
        {"name": "시간강사 수당 지급", "type": "monthly", "description": "매월 말 시간강사 수당 처리"}
      ],
      "preparation_tasks": [
        {"name": "수능 업무 준비", "type": "preparation", "description": "11월 수능 관련 업무 사전 준비"}
      ]
    },
    "11": {
      "month_name": "11월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "weekly", "description": "매주 작성하는 업무 보고서", "weeks": 4},
        {"name": "기간제교원 계약", "type": "as_needed", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"]},
        {"name": "시간강사 수당 지급", "type": "monthly", "description": "매월 말 시간강사 수당 처리"}
      ],
      "special_tasks": [
        {"name": "수능 업무", "type": "special", "description": "11월 수능 관련 업무 (시험장 운영 등)"}
      ],
      "preparation_tasks": [
        {"name": "학교평가 준비", "type": "preparation", "description": "12월 학교평가 사전 준비"}
      ]
    },
    "12": {
      "month_name": "12월",
      "regular_tasks": [
        {"name": "주간업무일지", "type": "weekly", "description": "매주 작성하는 업무 보고서", "weeks": 4},
        {"name": "기간제교원 계약", "type": "as_needed", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"]},
        {"name": "시간강사 수당 지급", "type": "monthly", "description": "매월 말 시간강사 수당 처리"}
      ],
      "special_tasks": [
        {"name": "학교평가", "type": "special", "description": "12월 학교평가 준비 및 실시"}
      ]
    }
  },
  teachers: [
    {"id": "T001", "name": "김영희", "subject": "국어", "grade": "1학년", "annual_leave": 21, "used_leave": 3, "remaining_leave": 18},
    {"id": "T002", "name": "박민수", "subject": "수학", "grade": "2학년", "annual_leave": 21, "used_leave": 5, "remaining_leave": 16},
    {"id": "T003", "name": "이정은", "subject": "영어", "grade": "3학년", "annual_leave": 21, "used_leave": 3, "remaining_leave": 18},
    {"id": "T004", "name": "최수진", "subject": "과학", "grade": "1학년", "annual_leave": 21, "used_leave": 5, "remaining_leave": 16},
    {"id": "T005", "name": "장기용", "subject": "사회", "grade": "2학년", "annual_leave": 21, "used_leave": 0, "remaining_leave": 21},
    {"id": "T006", "name": "윤서연", "subject": "미술", "grade": "전학년", "annual_leave": 21, "used_leave": 61, "remaining_leave": 0},
    {"id": "T007", "name": "한동민", "subject": "체육", "grade": "전학년", "annual_leave": 21, "used_leave": 0, "remaining_leave": 21},
    {"id": "T008", "name": "정혜림", "subject": "음악", "grade": "전학년", "annual_leave": 21, "used_leave": 0, "remaining_leave": 21}
  ],
  substitute_teachers: [
    {"id": "S001", "name": "강나연", "subjects": ["국어", "사회"], "available": true, "current_assignment": null},
    {"id": "S002", "name": "임철호", "subjects": ["수학", "과학"], "available": true, "current_assignment": null},
    {"id": "S003", "name": "송미경", "subjects": ["영어"], "available": false, "current_assignment": "T003"},
    {"id": "S004", "name": "오진석", "subjects": ["체육", "미술"], "available": true, "current_assignment": null},
    {"id": "S005", "name": "안소희", "subjects": ["음악", "미술"], "available": false, "current_assignment": "T006"}
  ],
  vacations: [
    {
      "id": "V001",
      "teacher_id": "T001",
      "teacher_name": "김영희",
      "vacation_type": "연가",
      "start_date": "2025-03-15",
      "end_date": "2025-03-17",
      "days": 3,
      "substitute_teacher_id": "S001",
      "substitute_teacher_name": "강나연",
      "status": "승인",
      "reason": "개인사정"
    },
    {
      "id": "V002", 
      "teacher_id": "T002",
      "teacher_name": "박민수",
      "vacation_type": "병가",
      "start_date": "2025-05-20",
      "end_date": "2025-05-24",
      "days": 5,
      "substitute_teacher_id": "S002",
      "substitute_teacher_name": "임철호",
      "status": "승인",
      "reason": "치료"
    },
    {
      "id": "V003",
      "teacher_id": "T003",
      "teacher_name": "이정은",
      "vacation_type": "특별휴가",
      "start_date": "2025-07-10",
      "end_date": "2025-07-12",
      "days": 3,
      "substitute_teacher_id": "S003",
      "substitute_teacher_name": "송미경",
      "status": "대기",
      "reason": "가족돌봄"
    },
    {
      "id": "V004",
      "teacher_id": "T004",
      "teacher_name": "최수진",
      "vacation_type": "연가",
      "start_date": "2025-09-02",
      "end_date": "2025-09-06",
      "days": 5,
      "substitute_teacher_id": "S002",
      "substitute_teacher_name": "임철호",
      "status": "승인",
      "reason": "휴식"
    },
    {
      "id": "V005",
      "teacher_id": "T006",
      "teacher_name": "윤서연",
      "vacation_type": "출산휴가",
      "start_date": "2025-11-01",
      "end_date": "2025-12-31",
      "days": 61,
      "substitute_teacher_id": "S005",
      "substitute_teacher_name": "안소희",
      "status": "승인",
      "reason": "출산"
    }
  ],
  vacation_types: ["연가", "병가", "특별휴가", "출산휴가", "공가", "경조휴가"]
};

// Global state
let currentMonth = 8;
let currentCalendarMonth = 1;
let currentActiveTab = 'task-management';
let currentVacationView = 'calendar';
let taskStates = {};
let editingVacationId = null;

// Initialize task states
function initializeTaskStates() {
  for (let month = 1; month <= 12; month++) {
    taskStates[month] = {};
    const monthData = appData.monthly_tasks[month.toString()];
    
    // Initialize regular tasks
    if (monthData.regular_tasks) {
      monthData.regular_tasks.forEach((task, index) => {
        const taskId = `regular_${index}`;
        taskStates[month][taskId] = {
          completed: false,
          subtasks: {}
        };
        
        if (task.type === 'weekly' && task.weeks) {
          for (let week = 1; week <= task.weeks; week++) {
            taskStates[month][taskId].subtasks[`week_${week}`] = false;
          }
        }
        
        if (task.type === 'as_needed' && task.steps) {
          task.steps.forEach((step, stepIndex) => {
            taskStates[month][taskId].subtasks[`step_${stepIndex}`] = false;
          });
        }
      });
    }
    
    if (monthData.special_tasks) {
      monthData.special_tasks.forEach((task, index) => {
        const taskId = `special_${index}`;
        taskStates[month][taskId] = { completed: false, subtasks: {} };
      });
    }
    
    if (monthData.preparation_tasks) {
      monthData.preparation_tasks.forEach((task, index) => {
        const taskId = `preparation_${index}`;
        taskStates[month][taskId] = { completed: false, subtasks: {} };
      });
    }
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
    const subtaskKeys = Object.keys(task.subtasks);
    
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

// Render tasks for a specific month
function renderTasks(month) {
  const monthData = appData.monthly_tasks[month.toString()];
  const taskContent = document.getElementById('task-content');
  
  if (!monthData) {
    taskContent.innerHTML = '<p>해당 월의 업무 데이터가 없습니다.</p>';
    return;
  }
  
  let html = '';
  
  // Regular tasks
  if (monthData.regular_tasks && monthData.regular_tasks.length > 0) {
    html += '<div class="task-section"><h4>정기 업무</h4>';
    monthData.regular_tasks.forEach((task, index) => {
      const taskId = `regular_${index}`;
      const taskState = taskStates[month][taskId];
      const isCompleted = taskState.completed;
      
      html += `
        <div class="task-card ${isCompleted ? 'completed' : ''}">
          <div class="task-header">
            <div class="task-checkbox ${isCompleted ? 'checked' : ''}" 
                 data-month="${month}" data-task="${taskId}"></div>
            <h5 class="task-title">${task.name}</h5>
            <span class="task-type-badge task-type-${task.type === 'as_needed' ? 'monthly' : task.type}">
              ${task.type === 'weekly' ? '주간' : task.type === 'monthly' ? '월간' : task.type === 'as_needed' ? '필요시' : '기타'}
            </span>
          </div>
          <p class="task-description">${task.description}</p>
      `;
      
      // Weekly subtasks
      if (task.type === 'weekly' && task.weeks) {
        html += '<div class="weekly-checklist">';
        for (let week = 1; week <= task.weeks; week++) {
          const subtaskKey = `week_${week}`;
          const isSubtaskCompleted = taskState.subtasks[subtaskKey];
          html += `
            <div class="week-item">
              <div class="week-checkbox ${isSubtaskCompleted ? 'checked' : ''}" 
                   data-month="${month}" data-task="${taskId}" data-subtask="${subtaskKey}"></div>
              <span class="week-label">${week}주차</span>
            </div>
          `;
        }
        html += '</div>';
      }
      
      // Contract steps
      if (task.type === 'as_needed' && task.steps) {
        html += '<div class="contract-steps">';
        task.steps.forEach((step, stepIndex) => {
          const subtaskKey = `step_${stepIndex}`;
          const isStepCompleted = taskState.subtasks[subtaskKey];
          html += `
            <div class="contract-step ${isStepCompleted ? 'completed' : ''}">
              <div class="step-number">${stepIndex + 1}</div>
              <div class="step-checkbox ${isStepCompleted ? 'checked' : ''}" 
                   data-month="${month}" data-task="${taskId}" data-subtask="${subtaskKey}"></div>
              <span class="step-label">${step}</span>
            </div>
          `;
        });
        html += '</div>';
      }
      
      html += '</div>';
    });
    html += '</div>';
  }
  
  // Special tasks
  if (monthData.special_tasks && monthData.special_tasks.length > 0) {
    html += '<div class="task-section"><h4>특별 업무</h4>';
    monthData.special_tasks.forEach((task, index) => {
      const taskId = `special_${index}`;
      const taskState = taskStates[month][taskId];
      const isCompleted = taskState.completed;
      
      html += `
        <div class="task-card ${isCompleted ? 'completed' : ''}">
          <div class="task-header">
            <div class="task-checkbox ${isCompleted ? 'checked' : ''}" 
                 data-month="${month}" data-task="${taskId}"></div>
            <h5 class="task-title">${task.name}</h5>
            <span class="task-type-badge task-type-special">특별</span>
          </div>
          <p class="task-description">${task.description}</p>
        </div>
      `;
    });
    html += '</div>';
  }
  
  // Preparation tasks
  if (monthData.preparation_tasks && monthData.preparation_tasks.length > 0) {
    html += '<div class="task-section"><h4>준비 업무</h4>';
    monthData.preparation_tasks.forEach((task, index) => {
      const taskId = `preparation_${index}`;
      const taskState = taskStates[month][taskId];
      const isCompleted = taskState.completed;
      
      html += `
        <div class="task-card ${isCompleted ? 'completed' : ''}">
          <div class="task-header">
            <div class="task-checkbox ${isCompleted ? 'checked' : ''}" 
                 data-month="${month}" data-task="${taskId}"></div>
            <h5 class="task-title">${task.name}</h5>
            <span class="task-type-badge task-type-preparation">준비</span>
          </div>
          <p class="task-description">${task.description}</p>
        </div>
      `;
    });
    html += '</div>';
  }
  
  if (html === '') {
    html = '<p>이번 달에는 등록된 업무가 없습니다.</p>';
  }
  
  taskContent.innerHTML = html;
  addTaskCheckboxEventListeners();
}

// Add event listeners to task checkboxes
function addTaskCheckboxEventListeners() {
  document.querySelectorAll('.task-checkbox').forEach(checkbox => {
    checkbox.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const month = parseInt(this.dataset.month);
      const taskId = this.dataset.task;
      toggleTaskCompletion(month, taskId);
    });
  });
  
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

// Vacation Management Functions
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
  
  const totalTeachersEl = document.getElementById('total-teachers');
  const currentVacationsEl = document.getElementById('current-vacations');
  const pendingApplicationsEl = document.getElementById('pending-applications');
  const availableSubstitutesEl = document.getElementById('available-substitutes');
  
  if (totalTeachersEl) totalTeachersEl.textContent = totalTeachers;
  if (currentVacationsEl) currentVacationsEl.textContent = currentVacations;
  if (pendingApplicationsEl) pendingApplicationsEl.textContent = pendingApplications;
  if (availableSubstitutesEl) availableSubstitutesEl.textContent = availableSubstitutes;
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
  // Render teachers table
  const teacherTableBody = document.getElementById('teacher-table-body');
  if (teacherTableBody) {
    let teacherHtml = '';
    
    appData.teachers.forEach(teacher => {
      const currentDate = new Date();
      const onVacation = appData.vacations.find(v => {
        const startDate = new Date(v.start_date);
        const endDate = new Date(v.end_date);
        return v.teacher_id === teacher.id && v.status === '승인' && 
               startDate <= currentDate && endDate >= currentDate;
      });
      
      const status = onVacation ? '휴가중' : '정상근무';
      
      teacherHtml += `
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
    
    teacherTableBody.innerHTML = teacherHtml;
  }
  
  // Render vacations table
  const vacationTableBody = document.getElementById('vacation-table-body');
  if (vacationTableBody) {
    let vacationHtml = '';
    
    appData.vacations.forEach(vacation => {
      const startDate = new Date(vacation.start_date);
      const endDate = new Date(vacation.end_date);
      const formatDate = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      
      vacationHtml += `
        <tr>
          <td>${vacation.teacher_name}</td>
          <td>${vacation.vacation_type}</td>
          <td>${formatDate(startDate)} ~ ${formatDate(endDate)}</td>
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
    
    vacationTableBody.innerHTML = vacationHtml;
  }
}

function renderSubstitutesView() {
  const substitutesGrid = document.querySelector('.substitutes-grid');
  if (!substitutesGrid) return;
  
  let html = '';
  
  appData.substitute_teachers.forEach(substitute => {
    const assignedTeacher = substitute.current_assignment ? 
      appData.teachers.find(t => t.id === substitute.current_assignment) : null;
    
    html += `
      <div class="substitute-card ${substitute.available ? 'available' : 'busy'}">
        <div class="substitute-header">
          <h4 class="substitute-name">${substitute.name}</h4>
          <span class="availability-badge ${substitute.available ? 'available' : 'busy'}">
            ${substitute.available ? '대기중' : '배치중'}
          </span>
        </div>
        <div class="substitute-subjects">전문과목: ${substitute.subjects.join(', ')}</div>
        ${!substitute.available && assignedTeacher ? 
          `<div class="current-assignment">현재 배치: ${assignedTeacher.name} (${assignedTeacher.subject}) 대체</div>` : 
          ''}
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

// Modal Functions
function openVacationModal(vacationId = null) {
  const modal = document.getElementById('vacation-modal');
  if (!modal) return;
  
  const form = document.getElementById('vacation-form');
  const title = document.getElementById('modal-title');
  
  editingVacationId = vacationId;
  
  if (vacationId) {
    if (title) title.textContent = '휴가 수정';
    const vacation = appData.vacations.find(v => v.id === vacationId);
    if (vacation) {
      const teacherSelect = document.getElementById('teacher-select');
      const vacationTypeSelect = document.getElementById('vacation-type-select');
      const startDate = document.getElementById('start-date');
      const endDate = document.getElementById('end-date');
      const substituteSelect = document.getElementById('substitute-select');
      const vacationReason = document.getElementById('vacation-reason');
      const approvalStatus = document.getElementById('approval-status');
      
      if (teacherSelect) teacherSelect.value = vacation.teacher_id;
      if (vacationTypeSelect) vacationTypeSelect.value = vacation.vacation_type;
      if (startDate) startDate.value = vacation.start_date;
      if (endDate) endDate.value = vacation.end_date;
      if (substituteSelect) substituteSelect.value = vacation.substitute_teacher_id;
      if (vacationReason) vacationReason.value = vacation.reason;
      if (approvalStatus) approvalStatus.value = vacation.status;
    }
  } else {
    if (title) title.textContent = '휴가 신청';
    if (form) form.reset();
  }
  
  modal.classList.remove('hidden');
}

function closeVacationModal() {
  const modal = document.getElementById('vacation-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
  editingVacationId = null;
}

function saveVacation() {
  const teacherSelect = document.getElementById('teacher-select');
  const vacationTypeSelect = document.getElementById('vacation-type-select');
  const startDateInput = document.getElementById('start-date');
  const endDateInput = document.getElementById('end-date');
  const substituteSelect = document.getElementById('substitute-select');
  const vacationReason = document.getElementById('vacation-reason');
  const approvalStatus = document.getElementById('approval-status');
  
  if (!teacherSelect || !vacationTypeSelect || !startDateInput || !endDateInput || !substituteSelect) {
    alert('필수 요소를 찾을 수 없습니다.');
    return;
  }
  
  const teacherId = teacherSelect.value;
  const vacationType = vacationTypeSelect.value;
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;
  const substituteId = substituteSelect.value;
  const reason = vacationReason ? vacationReason.value : '';
  const status = approvalStatus ? approvalStatus.value : '대기';
  
  if (!teacherId || !vacationType || !startDate || !endDate || !substituteId) {
    alert('필수 항목을 모두 입력해주세요.');
    return;
  }
  
  const teacher = appData.teachers.find(t => t.id === teacherId);
  const substitute = appData.substitute_teachers.find(s => s.id === substituteId);
  
  if (!teacher || !substitute) {
    alert('교사 또는 대체교사 정보를 찾을 수 없습니다.');
    return;
  }
  
  const start = new Date(startDate);
  const end = new Date(endDate);
  const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
  
  const vacationData = {
    id: editingVacationId || `V${String(appData.vacations.length + 1).padStart(3, '0')}`,
    teacher_id: teacherId,
    teacher_name: teacher.name,
    vacation_type: vacationType,
    start_date: startDate,
    end_date: endDate,
    days: days,
    substitute_teacher_id: substituteId,
    substitute_teacher_name: substitute.name,
    status: status,
    reason: reason
  };
  
  if (editingVacationId) {
    const index = appData.vacations.findIndex(v => v.id === editingVacationId);
    if (index !== -1) {
      appData.vacations[index] = vacationData;
    }
  } else {
    appData.vacations.push(vacationData);
    
    // Update teacher's used leave
    const teacherIndex = appData.teachers.findIndex(t => t.id === teacherId);
    if (teacherIndex !== -1) {
      appData.teachers[teacherIndex].used_leave += days;
      appData.teachers[teacherIndex].remaining_leave = 
        appData.teachers[teacherIndex].annual_leave - appData.teachers[teacherIndex].used_leave;
    }
  }
  
  closeVacationModal();
  updateVacationStats();
  switchVacationView(currentVacationView);
}

function editVacation(vacationId) {
  openVacationModal(vacationId);
}

function deleteVacation(vacationId) {
  if (confirm('정말로 이 휴가 신청을 삭제하시겠습니까?')) {
    const vacationIndex = appData.vacations.findIndex(v => v.id === vacationId);
    if (vacationIndex !== -1) {
      const vacation = appData.vacations[vacationIndex];
      
      // Update teacher's used leave
      const teacherIndex = appData.teachers.findIndex(t => t.id === vacation.teacher_id);
      if (teacherIndex !== -1 && vacation.status === '승인') {
        appData.teachers[teacherIndex].used_leave -= vacation.days;
        appData.teachers[teacherIndex].remaining_leave = 
          appData.teachers[teacherIndex].annual_leave - appData.teachers[teacherIndex].used_leave;
      }
      
      appData.vacations.splice(vacationIndex, 1);
      updateVacationStats();
      switchVacationView(currentVacationView);
    }
  }
}

// Populate form selects
function populateFormSelects() {
  const teacherSelect = document.getElementById('teacher-select');
  const vacationTypeSelect = document.getElementById('vacation-type-select');
  const substituteSelect = document.getElementById('substitute-select');
  
  if (teacherSelect) {
    // Clear existing options except the first placeholder
    teacherSelect.innerHTML = '<option value="">교사를 선택하세요</option>';
    
    appData.teachers.forEach(teacher => {
      const option = document.createElement('option');
      option.value = teacher.id;
      option.textContent = `${teacher.name} (${teacher.subject})`;
      teacherSelect.appendChild(option);
    });
  }
  
  if (vacationTypeSelect) {
    vacationTypeSelect.innerHTML = '<option value="">휴가 유형을 선택하세요</option>';
    
    appData.vacation_types.forEach(type => {
      const option = document.createElement('option');
      option.value = type;
      option.textContent = type;
      vacationTypeSelect.appendChild(option);
    });
  }
  
  if (substituteSelect) {
    substituteSelect.innerHTML = '<option value="">대체교사를 선택하세요</option>';
    
    appData.substitute_teachers.forEach(substitute => {
      const option = document.createElement('option');
      option.value = substitute.id;
      option.textContent = `${substitute.name} (${substitute.subjects.join(', ')})`;
      substituteSelect.appendChild(option);
    });
  }
}

// Initialize the application
function initializeApp() {
  console.log('Initializing application...');
  
  initializeTaskStates();
  populateFormSelects();
  
  // Main navigation tabs
  document.querySelectorAll('.main-nav-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      console.log('Main nav tab clicked:', e.target.dataset.tab);
      const tabName = e.target.dataset.tab;
      switchMainTab(tabName);
    });
  });
  
  // Month tabs for tasks
  document.querySelectorAll('.month-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      console.log('Month tab clicked:', e.target.dataset.month);
      const month = parseInt(e.target.dataset.month);
      switchMonth(month);
    });
  });
  
  // Calendar tabs for vacation
  document.querySelectorAll('.calendar-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      console.log('Calendar tab clicked:', e.target.dataset.month);
      const month = parseInt(e.target.dataset.month);
      switchCalendarMonth(month);
    });
  });
  
  // View buttons for vacation
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      console.log('View button clicked:', e.target.dataset.view);
      const view = e.target.dataset.view;
      switchVacationView(view);
    });
  });
  
  // Modal controls
  const addVacationBtn = document.getElementById('add-vacation-btn');
  if (addVacationBtn) {
    addVacationBtn.addEventListener('click', () => {
      console.log('Add vacation button clicked');
      openVacationModal();
    });
  }
  
  const modalCloseBtn = document.getElementById('modal-close-btn');
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeVacationModal);
  }
  
  const cancelBtn = document.getElementById('cancel-btn');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', closeVacationModal);
  }
  
  const saveVacationBtn = document.getElementById('save-vacation-btn');
  if (saveVacationBtn) {
    saveVacationBtn.addEventListener('click', saveVacation);
  }
  
  // Modal overlay click to close
  const modalOverlay = document.querySelector('.modal-overlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeVacationModal);
  }
  
  // Initialize views
  console.log('Setting initial views...');
  switchMonth(currentMonth);
  switchMainTab(currentActiveTab);
  
  console.log('Application initialized successfully');
}

// Global functions for button clicks
window.editVacation = editVacation;
window.deleteVacation = deleteVacation;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');
  initializeApp();
});