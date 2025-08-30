// 데이터 초기화 - 제공된 데이터를 기반으로 완전히 구현
let currentMonth = 1;
let currentView = 'list';
let editingTask = null;
let editingLeave = null;
let vacationChart = null;

// 기존 월별 업무 데이터 완전 보존
const monthlyTasks = {
  "1": {
    "month_name": "1월",
    "regular_tasks": [
      {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": "task_1_1", "editable": true, "completed_weeks": 0},
      {"name": "기간제교원 계약", "type": "프로젝트업무", "description": "필요시 진행하는 기간제교원 채용 업무", "steps": ["공고번호 채번", "공고 내부결재", "교육청 게시판 공고", "채용 계약 완료", "계약 후 문서 수합 및 내부결재", "성범죄조회 문서 출력 합본", "교감선생님 제출"], "id": "task_1_2", "editable": true, "completed_steps": []},
      {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_1_3", "editable": true, "weeks": 1, "completed_weeks": 0}
    ],
    "preparation_tasks": [
      {"name": "신입생 오리엔테이션 준비", "type": "준비업무", "description": "2월 신입생 오리엔테이션 사전 준비", "id": "task_1_prep_1", "editable": true, "weeks": 2, "completed_weeks": 0}
    ],
    "custom_tasks": []
  },
  "2": {
    "month_name": "2월",
    "regular_tasks": [
      {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": "task_2_1", "editable": true, "completed_weeks": 0},
      {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_2_2", "editable": true, "weeks": 1, "completed_weeks": 0}
    ],
    "special_tasks": [
      {"name": "신입생 오리엔테이션", "type": "특별업무", "description": "2월 신입생 오리엔테이션 진행", "id": "task_2_special_1", "editable": true, "weeks": 1, "completed_weeks": 0}
    ],
    "preparation_tasks": [
      {"name": "현황판 교체 준비", "type": "준비업무", "description": "3월 현황판 교체 사전 준비", "id": "task_2_prep_1", "editable": true, "weeks": 1, "completed_weeks": 0}
    ],
    "custom_tasks": []
  },
  "3": {
    "month_name": "3월",
    "regular_tasks": [
      {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": "task_3_1", "editable": true, "completed_weeks": 0},
      {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_3_2", "editable": true, "weeks": 1, "completed_weeks": 0}
    ],
    "special_tasks": [
      {"name": "현황판 교체", "type": "특별업무", "description": "3월 현황판 교체 작업", "id": "task_3_special_1", "editable": true, "weeks": 1, "completed_weeks": 0}
    ],
    "custom_tasks": []
  }
};

// 4월~9월 기본 업무 추가
for(let i = 4; i <= 9; i++) {
  monthlyTasks[i] = {
    month_name: `${i}월`,
    regular_tasks: [
      {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": `task_${i}_1`, "editable": true, "completed_weeks": 0},
      {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": `task_${i}_2`, "editable": true, "weeks": 1, "completed_weeks": 0}
    ],
    "custom_tasks": []
  };
}

// 10월~12월 기존 중요 업무 보존
monthlyTasks["10"] = {
  "month_name": "10월",
  "regular_tasks": [
    {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": "task_10_1", "editable": true, "completed_weeks": 0},
    {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_10_2", "editable": true, "weeks": 1, "completed_weeks": 0}
  ],
  "preparation_tasks": [
    {"name": "수능 업무 준비", "type": "준비업무", "description": "11월 수능 관련 업무 사전 준비", "id": "task_10_prep_1", "editable": true, "weeks": 3, "completed_weeks": 0}
  ],
  "custom_tasks": []
};

monthlyTasks["11"] = {
  "month_name": "11월",
  "regular_tasks": [
    {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": "task_11_1", "editable": true, "completed_weeks": 0},
    {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_11_2", "editable": true, "weeks": 1, "completed_weeks": 0}
  ],
  "special_tasks": [
    {"name": "수능 업무", "type": "특별업무", "description": "11월 수능 관련 업무 (시험장 운영 등)", "id": "task_11_special_1", "editable": true, "weeks": 2, "completed_weeks": 0}
  ],
  "preparation_tasks": [
    {"name": "학교평가 준비", "type": "준비업무", "description": "12월 학교평가 사전 준비", "id": "task_11_prep_1", "editable": true, "weeks": 2, "completed_weeks": 0}
  ],
  "custom_tasks": []
};

monthlyTasks["12"] = {
  "month_name": "12월",
  "regular_tasks": [
    {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": "task_12_1", "editable": true, "completed_weeks": 0},
    {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_12_2", "editable": true, "weeks": 1, "completed_weeks": 0}
  ],
  "special_tasks": [
    {"name": "학교평가", "type": "특별업무", "description": "12월 학교평가 준비 및 실시", "id": "task_12_special_1", "editable": true, "weeks": 2, "completed_weeks": 0}
  ],
  "custom_tasks": []
};

// 교사 데이터 (공무원 휴가규정 반영)
const teachers = [
  {"id": "T001", "name": "김영희", "subject": "국어", "grade": "1학년", "annual_leave": 21, "used_leave": 3, "remaining_leave": 18, "status": "정상근무", "years_of_service": 3},
  {"id": "T002", "name": "박민수", "subject": "수학", "grade": "2학년", "annual_leave": 21, "used_leave": 5, "remaining_leave": 16, "status": "정상근무", "years_of_service": 7},
  {"id": "T003", "name": "이정은", "subject": "영어", "grade": "3학년", "annual_leave": 23, "used_leave": 3, "remaining_leave": 20, "status": "정상근무", "years_of_service": 6},
  {"id": "T004", "name": "최수진", "subject": "과학", "grade": "1학년", "annual_leave": 25, "used_leave": 5, "remaining_leave": 20, "status": "정상근무", "years_of_service": 12},
  {"id": "T005", "name": "장기용", "subject": "사회", "grade": "2학년", "annual_leave": 21, "used_leave": 0, "remaining_leave": 21, "status": "정상근무", "years_of_service": 2},
  {"id": "T006", "name": "윤서연", "subject": "미술", "grade": "전학년", "annual_leave": 21, "used_leave": 0, "remaining_leave": 21, "status": "휴직중", "years_of_service": 4},
  {"id": "T007", "name": "한동민", "subject": "체육", "grade": "전학년", "annual_leave": 23, "used_leave": 0, "remaining_leave": 23, "status": "정상근무", "years_of_service": 8},
  {"id": "T008", "name": "정혜림", "subject": "음악", "grade": "전학년", "annual_leave": 21, "used_leave": 0, "remaining_leave": 21, "status": "정상근무", "years_of_service": 1}
];

// 기간제교사 데이터
const substituteTeachers = [
  {"id": "S001", "name": "강나연", "subjects": ["국어", "사회"], "available": true, "current_assignment": null},
  {"id": "S002", "name": "임철호", "subjects": ["수학", "과학"], "available": true, "current_assignment": null},
  {"id": "S003", "name": "송미경", "subjects": ["영어"], "available": true, "current_assignment": null},
  {"id": "S004", "name": "오진석", "subjects": ["체육", "미술"], "available": false, "current_assignment": "T006"},
  {"id": "S005", "name": "안소희", "subjects": ["음악", "미술"], "available": true, "current_assignment": null}
];

// 공무원 휴가규정
const vacationRegulations = {
  "연가": {"max_days": 21, "requires_doctor": false, "description": "연차휴가 (근속 5년 이상 23일, 10년 이상 25일)"},
  "병가": {"max_days": 60, "requires_doctor": true, "description": "병가 (의사 진단서 필요, 60일 이내)"},
  "공가": {"max_days": null, "requires_doctor": false, "description": "법정의무수행, 국가시험, 천재지변 등"},
  "특별휴가": {"max_days": 10, "requires_doctor": false, "description": "경조휴가 (결혼 5일, 사망 5일), 포상휴가"},
  "출산휴가": {"max_days": 90, "requires_doctor": true, "description": "산전후 휴가 (90일)"},
  "육아휴직": {"max_days": 1095, "requires_doctor": false, "description": "만8세 이하 자녀당 최대 3년"}
};

// 휴가 데이터
let vacations = [
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
    "teacher_id": "T006",
    "teacher_name": "윤서연",
    "vacation_type": "육아휴직",
    "start_date": "2025-01-01",
    "end_date": "2025-12-31",
    "days": 365,
    "substitute_teacher_id": "S004",
    "substitute_teacher_name": "오진석",
    "status": "승인",
    "reason": "만 8세 이하 자녀 양육을 위한 육아휴직"
  }
];

// 이벤트 리스너 등록
function initializeEventListeners() {
  // 메인 탭 전환
  document.querySelectorAll('[data-tab]').forEach(button => {
    button.addEventListener('click', (e) => {
      switchMainTab(e.target.dataset.tab);
    });
  });

  // 월별 탭 전환
  document.querySelectorAll('[data-month]').forEach(button => {
    button.addEventListener('click', (e) => {
      switchMonth(parseInt(e.target.dataset.month));
    });
  });

  // 뷰 탭 전환
  document.querySelectorAll('[data-view]').forEach(button => {
    button.addEventListener('click', (e) => {
      switchView(e.target.dataset.view);
    });
  });

  // 업무 추가 버튼
  const addTaskBtn = document.getElementById('add-task-btn');
  if (addTaskBtn) {
    addTaskBtn.addEventListener('click', () => openTaskModal());
  }

  // 휴가 신청 버튼
  const addLeaveBtn = document.getElementById('add-leave-btn');
  if (addLeaveBtn) {
    addLeaveBtn.addEventListener('click', () => openLeaveModal());
  }

  // 업무 모달 관련
  const taskModal = document.getElementById('task-modal');
  const closeTaskModalBtn = document.getElementById('close-task-modal');
  const cancelTaskBtn = document.getElementById('cancel-task');
  const saveTaskBtn = document.getElementById('save-task');
  const taskTypeSelect = document.getElementById('task-type');
  const addStepBtn = document.getElementById('add-step-btn');

  if (closeTaskModalBtn) closeTaskModalBtn.addEventListener('click', closeTaskModal);
  if (cancelTaskBtn) cancelTaskBtn.addEventListener('click', closeTaskModal);
  if (saveTaskBtn) saveTaskBtn.addEventListener('click', saveTask);
  if (taskTypeSelect) taskTypeSelect.addEventListener('change', toggleTaskTypeFields);
  if (addStepBtn) addStepBtn.addEventListener('click', addStepHandler);

  // 휴가 모달 관련
  const leaveModal = document.getElementById('leave-modal');
  const closeLeaveModalBtn = document.getElementById('close-leave-modal');
  const cancelLeaveBtn = document.getElementById('cancel-leave');
  const saveLeaveBtn = document.getElementById('save-leave');
  const leaveTeacherSelect = document.getElementById('leave-teacher');
  const leaveTypeSelect = document.getElementById('leave-type');
  const leaveStartDate = document.getElementById('leave-start-date');
  const leaveEndDate = document.getElementById('leave-end-date');

  if (closeLeaveModalBtn) closeLeaveModalBtn.addEventListener('click', closeLeaveModal);
  if (cancelLeaveBtn) cancelLeaveBtn.addEventListener('click', closeLeaveModal);
  if (saveLeaveBtn) saveLeaveBtn.addEventListener('click', saveLeave);
  if (leaveTeacherSelect) leaveTeacherSelect.addEventListener('change', updateTeacherLeaveInfo);
  if (leaveTypeSelect) leaveTypeSelect.addEventListener('change', updateLeaveTypeInfo);
  if (leaveStartDate) leaveStartDate.addEventListener('change', calculateLeaveDays);
  if (leaveEndDate) leaveEndDate.addEventListener('change', calculateLeaveDays);

  // 모달 외부 클릭 시 닫기
  if (taskModal) {
    taskModal.addEventListener('click', (e) => {
      if (e.target === taskModal) closeTaskModal();
    });
  }

  if (leaveModal) {
    leaveModal.addEventListener('click', (e) => {
      if (e.target === leaveModal) closeLeaveModal();
    });
  }
}

// 메인 탭 전환 함수
function switchMainTab(tabName) {
  // 모든 탭 버튼에서 active 클래스 제거
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  
  // 모든 탭 콘텐츠에서 active 클래스 제거
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
  // 선택된 탭 활성화
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  
  if (tabName === 'tasks') {
    document.getElementById('tasks-section').classList.add('active');
    updateTasksView();
    updateMonthlyProgress();
    updateAnnualProgress();
  } else if (tabName === 'leave') {
    document.getElementById('leave-section').classList.add('active');
    updateLeaveView();
  }
}

// 월별 탭 전환
function switchMonth(month) {
  currentMonth = month;
  
  // 월별 탭 업데이트
  document.querySelectorAll('.month-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelector(`[data-month="${month}"]`).classList.add('active');
  
  // 월별 제목 및 콘텐츠 업데이트
  const monthlyTitle = document.getElementById('monthly-title');
  if (monthlyTitle) monthlyTitle.textContent = `${month}월 진척률`;
  
  updateTasksView();
  updateMonthlyProgress();
}

// 뷰 전환 (목록/테이블/기간제교사/휴가현황)
function switchView(viewName) {
  currentView = viewName;
  
  // 뷰 탭 업데이트
  document.querySelectorAll('.view-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelector(`[data-view="${viewName}"]`).classList.add('active');
  
  // 뷰 콘텐츠 업데이트
  document.querySelectorAll('.view-content').forEach(content => content.classList.remove('active'));
  document.getElementById(`${viewName}-view`).classList.add('active');
  
  updateLeaveView();
}

// 업무 추가 모달 열기
function openTaskModal(taskId = null) {
  editingTask = taskId;
  const modal = document.getElementById('task-modal');
  const title = document.getElementById('task-modal-title');
  
  if (!modal || !title) return;
  
  if (taskId) {
    title.textContent = '업무 편집';
    const task = findTaskById(taskId);
    if (task) {
      document.getElementById('task-name').value = task.name;
      document.getElementById('task-type').value = task.type;
      document.getElementById('task-description').value = task.description || '';
      document.getElementById('task-weeks').value = task.weeks || 1;
      
      // 현재 월만 체크
      document.querySelectorAll('#months-group input[type="checkbox"]').forEach(cb => {
        cb.checked = cb.value == currentMonth;
      });
      
      // 단계 정보 로드
      if (task.steps) {
        clearSteps();
        task.steps.forEach(step => {
          addStep(step);
        });
      }
    }
  } else {
    title.textContent = '업무 추가';
    document.getElementById('task-form').reset();
    clearSteps();
    // 현재 월을 기본 선택
    const currentMonthCheckbox = document.querySelector(`#months-group input[value="${currentMonth}"]`);
    if (currentMonthCheckbox) currentMonthCheckbox.checked = true;
  }
  
  toggleTaskTypeFields();
  modal.classList.remove('hidden');
}

// 업무 추가 모달 닫기
function closeTaskModal() {
  const modal = document.getElementById('task-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
  editingTask = null;
}

// 휴가 신청 모달 열기
function openLeaveModal(vacationId = null) {
  editingLeave = vacationId;
  const modal = document.getElementById('leave-modal');
  const title = document.getElementById('leave-modal-title');
  
  if (!modal || !title) return;
  
  updateTeacherOptions();
  updateSubstituteOptions();
  
  if (vacationId) {
    title.textContent = '휴가 편집';
    const vacation = vacations.find(v => v.id === vacationId);
    if (vacation) {
      document.getElementById('leave-teacher').value = vacation.teacher_id;
      document.getElementById('leave-type').value = vacation.vacation_type;
      document.getElementById('leave-start-date').value = vacation.start_date;
      document.getElementById('leave-end-date').value = vacation.end_date;
      document.getElementById('leave-substitute').value = vacation.substitute_teacher_id || '';
      document.getElementById('leave-reason').value = vacation.reason;
      
      updateTeacherLeaveInfo();
      updateLeaveTypeInfo();
      calculateLeaveDays();
    }
  } else {
    title.textContent = '휴가 신청';
    document.getElementById('leave-form').reset();
    resetLeaveModalInfo();
  }
  
  modal.classList.remove('hidden');
}

// 휴가 신청 모달 닫기
function closeLeaveModal() {
  const modal = document.getElementById('leave-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
  editingLeave = null;
}

// 업무 유형에 따른 필드 토글
function toggleTaskTypeFields() {
  const type = document.getElementById('task-type').value;
  const weeksGroup = document.getElementById('weeks-group');
  const stepsSection = document.getElementById('steps-section');
  
  if (type === '프로젝트업무' || type === '단계별업무') {
    weeksGroup.style.display = 'none';
    stepsSection.style.display = 'block';
  } else {
    weeksGroup.style.display = 'block';
    stepsSection.style.display = 'none';
  }
}

// 단계 추가 버튼 핸들러 (이벤트 객체 처리)
function addStepHandler(event) {
  if (event) event.preventDefault();
  addStep();
}

// 단계 추가 함수 (매개변수 타입 검사 추가)
function addStep(stepText = '') {
  // 이벤트 객체가 전달된 경우 기본값으로 처리
  if (typeof stepText === 'object' && stepText !== null) {
    stepText = '';
  }
  
  const container = document.getElementById('steps-container');
  const stepCount = container.children.length + 1;
  
  const stepDiv = document.createElement('div');
  stepDiv.className = 'step-input-item';
  stepDiv.innerHTML = `
    <div class="step-input-row">
      <span class="step-number">${stepCount}</span>
      <input type="text" class="form-control step-input" placeholder="${stepCount}단계 입력" value="${stepText}">
      <button type="button" class="btn-remove-step" onclick="removeStep(this)" ${stepCount === 1 ? 'disabled' : ''}>×</button>
    </div>
  `;
  
  container.appendChild(stepDiv);
  
  // 첫 번째 단계가 아닌 경우 이전 단계들의 삭제 버튼 활성화
  if (stepCount > 1) {
    updateRemoveButtonStates();
  }
}

// 단계 제거 함수
function removeStep(button) {
  const container = document.getElementById('steps-container');
  if (container.children.length <= 1) return; // 최소 1단계 유지
  
  button.closest('.step-input-item').remove();
  updateStepNumbers();
  updateRemoveButtonStates();
}

// 단계 번호 업데이트
function updateStepNumbers() {
  const container = document.getElementById('steps-container');
  const stepItems = container.querySelectorAll('.step-input-item');
  
  stepItems.forEach((item, index) => {
    const stepNumber = item.querySelector('.step-number');
    const stepInput = item.querySelector('.step-input');
    const newNumber = index + 1;
    
    stepNumber.textContent = newNumber;
    if (!stepInput.value.trim()) {
      stepInput.placeholder = `${newNumber}단계 입력`;
    }
  });
}

// 삭제 버튼 상태 업데이트
function updateRemoveButtonStates() {
  const container = document.getElementById('steps-container');
  const removeButtons = container.querySelectorAll('.btn-remove-step');
  
  removeButtons.forEach((button, index) => {
    if (index === 0 && removeButtons.length === 1) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });
}

// 단계 초기화
function clearSteps() {
  const container = document.getElementById('steps-container');
  container.innerHTML = '';
}

// 교사 휴가 정보 업데이트
function updateTeacherLeaveInfo() {
  const teacherId = document.getElementById('leave-teacher').value;
  const infoDiv = document.getElementById('teacher-leave-info');
  
  if (!teacherId) {
    infoDiv.classList.add('hidden');
    return;
  }
  
  const teacher = teachers.find(t => t.id === teacherId);
  if (teacher) {
    infoDiv.innerHTML = `
      <strong>${teacher.name}</strong><br>
      연가 잔여: ${teacher.remaining_leave}일 / ${teacher.annual_leave}일<br>
      근속연수: ${teacher.years_of_service}년<br>
      현재 상태: ${teacher.status}
    `;
    infoDiv.classList.remove('hidden');
    
    // 기간제교원 추천 업데이트
    updateSubstituteSuggestion();
  }
}

// 휴가 유형 정보 업데이트
function updateLeaveTypeInfo() {
  const type = document.getElementById('leave-type').value;
  const infoDiv = document.getElementById('leave-type-info');
  
  if (!type || !vacationRegulations[type]) {
    infoDiv.classList.add('hidden');
    return;
  }
  
  const regulation = vacationRegulations[type];
  infoDiv.innerHTML = `
    <strong>${type}</strong><br>
    ${regulation.description}<br>
    ${regulation.max_days ? `최대 ${regulation.max_days}일` : '제한 없음'}<br>
    ${regulation.requires_doctor ? '의사 진단서 필요' : '진단서 불필요'}
  `;
  infoDiv.classList.remove('hidden');
}

// 휴가 일수 계산
function calculateLeaveDays() {
  const startDate = document.getElementById('leave-start-date').value;
  const endDate = document.getElementById('leave-end-date').value;
  const infoDiv = document.getElementById('leave-days-info');
  
  if (!startDate || !endDate) {
    infoDiv.classList.add('hidden');
    return;
  }
  
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  
  infoDiv.innerHTML = `총 휴가 일수: <strong>${diffDays}일</strong>`;
  infoDiv.classList.remove('hidden');
  
  // 기간제교원 추천 업데이트
  updateSubstituteSuggestion();
}

// 기간제교원 추천
function updateSubstituteSuggestion() {
  const teacherId = document.getElementById('leave-teacher').value;
  const suggestionDiv = document.getElementById('substitute-suggestion');
  
  if (!teacherId) {
    suggestionDiv.classList.add('hidden');
    return;
  }
  
  const teacher = teachers.find(t => t.id === teacherId);
  if (!teacher) {
    suggestionDiv.classList.add('hidden');
    return;
  }
  
  const availableSubstitutes = substituteTeachers.filter(s => 
    s.available && s.subjects.includes(teacher.subject)
  );
  
  if (availableSubstitutes.length === 0) {
    suggestionDiv.innerHTML = `
      <strong>⚠️ 기간제교원 부족</strong><br>
      ${teacher.subject} 과목 담당 가능한 기간제교원이 없습니다.<br>
      신규 채용이 필요합니다.
    `;
    suggestionDiv.style.background = 'var(--color-bg-4)';
    suggestionDiv.style.borderColor = 'var(--color-error)';
  } else {
    const recommended = availableSubstitutes[0];
    suggestionDiv.innerHTML = `
      <strong>✅ 추천 기간제교원</strong><br>
      ${recommended.name} (담당 과목: ${recommended.subjects.join(', ')})<br>
      자동으로 선택되었습니다.
    `;
    suggestionDiv.style.background = 'var(--color-bg-3)';
    suggestionDiv.style.borderColor = 'var(--color-success)';
    
    // 자동으로 대체교사 선택
    document.getElementById('leave-substitute').value = recommended.id;
  }
  
  suggestionDiv.classList.remove('hidden');
}

// 모달 정보 초기화
function resetLeaveModalInfo() {
  document.getElementById('teacher-leave-info').classList.add('hidden');
  document.getElementById('leave-type-info').classList.add('hidden');
  document.getElementById('leave-days-info').classList.add('hidden');
  document.getElementById('substitute-suggestion').classList.add('hidden');
}

// 업무 저장
function saveTask() {
  const name = document.getElementById('task-name').value;
  const type = document.getElementById('task-type').value;
  const description = document.getElementById('task-description').value;
  const weeks = parseInt(document.getElementById('task-weeks').value) || 1;
  
  if (!name.trim()) {
    alert('업무명을 입력해주세요.');
    return;
  }
  
  // 선택된 월들 가져오기
  const selectedMonths = Array.from(document.querySelectorAll('#months-group input[type="checkbox"]:checked'))
    .map(cb => cb.value);
    
  if (selectedMonths.length === 0) {
    alert('최소 하나의 월을 선택해주세요.');
    return;
  }
  
  // 업무 데이터 생성
  const taskData = {
    name: name,
    type: type,
    description: description,
    editable: true,
    completed_weeks: 0,
    completed_steps: []
  };
  
  if (type === '프로젝트업무' || type === '단계별업무') {
    // 단계 수집
    const stepInputs = document.querySelectorAll('.step-input');
    const steps = Array.from(stepInputs)
      .map(input => input.value.trim())
      .filter(step => step !== '');
      
    if (steps.length === 0) {
      alert('최소 하나의 단계를 입력해주세요.');
      return;
    }
    
    taskData.steps = steps;
  } else {
    taskData.weeks = weeks;
  }
  
  if (editingTask) {
    // 기존 업무 편집
    const task = findTaskById(editingTask);
    if (task) {
      Object.assign(task, taskData);
      task.id = editingTask; // ID 유지
    }
  } else {
    // 새 업무 추가 - 선택된 월들에 추가
    selectedMonths.forEach(month => {
      const newTask = {
        ...taskData,
        id: `custom_${Date.now()}_${month}_${Math.random().toString(36).substr(2, 9)}`
      };
      
      if (!monthlyTasks[month].custom_tasks) {
        monthlyTasks[month].custom_tasks = [];
      }
      monthlyTasks[month].custom_tasks.push(newTask);
    });
  }
  
  closeTaskModal();
  updateTasksView();
  updateMonthlyProgress();
  updateAnnualProgress();
}

// 휴가 저장
function saveLeave() {
  const teacherId = document.getElementById('leave-teacher').value;
  const type = document.getElementById('leave-type').value;
  const startDate = document.getElementById('leave-start-date').value;
  const endDate = document.getElementById('leave-end-date').value;
  const substituteId = document.getElementById('leave-substitute').value;
  const reason = document.getElementById('leave-reason').value;
  
  if (!teacherId || !type || !startDate || !endDate || !reason) {
    alert('모든 필수 항목을 입력해주세요.');
    return;
  }
  
  const teacher = teachers.find(t => t.id === teacherId);
  const substitute = substituteTeachers.find(s => s.id === substituteId);
  
  // 휴가 일수 계산
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
  
  // 연가 잔여일수 확인
  if (type === '연가' && diffDays > teacher.remaining_leave) {
    alert(`연가 잔여일수(${teacher.remaining_leave}일)를 초과합니다.`);
    return;
  }
  
  const vacationData = {
    id: editingLeave || `V${Date.now()}`,
    teacher_id: teacherId,
    teacher_name: teacher.name,
    vacation_type: type,
    start_date: startDate,
    end_date: endDate,
    days: diffDays,
    substitute_teacher_id: substituteId || null,
    substitute_teacher_name: substitute ? substitute.name : null,
    status: '승인',
    reason: reason
  };
  
  if (editingLeave) {
    // 기존 휴가 편집
    const index = vacations.findIndex(v => v.id === editingLeave);
    if (index !== -1) {
      // 기존 대체교사 상태 복원
      const oldVacation = vacations[index];
      if (oldVacation.substitute_teacher_id) {
        const oldSubstitute = substituteTeachers.find(s => s.id === oldVacation.substitute_teacher_id);
        if (oldSubstitute) {
          oldSubstitute.available = true;
          oldSubstitute.current_assignment = null;
        }
      }
      
      // 기존 교사 휴가 사용일수 복원
      if (oldVacation.vacation_type === '연가') {
        teacher.used_leave -= oldVacation.days;
        teacher.remaining_leave += oldVacation.days;
      }
      
      vacations[index] = vacationData;
    }
  } else {
    // 새 휴가 추가
    vacations.push(vacationData);
  }
  
  // 교사 상태 업데이트
  if (type === '육아휴직' || diffDays > 30) {
    teacher.status = '휴직중';
  }
  
  // 연가 사용일수 업데이트
  if (type === '연가') {
    teacher.used_leave += diffDays;
    teacher.remaining_leave -= diffDays;
  }
  
  // 대체교사 상태 업데이트
  if (substitute) {
    substitute.available = false;
    substitute.current_assignment = teacherId;
  }
  
  closeLeaveModal();
  updateLeaveView();
  updateLeaveSummary();
}

// ID로 업무 찾기
function findTaskById(taskId) {
  for (let month in monthlyTasks) {
    const monthData = monthlyTasks[month];
    const allTaskArrays = [
      monthData.regular_tasks || [],
      monthData.special_tasks || [],
      monthData.preparation_tasks || [],
      monthData.custom_tasks || []
    ];
    
    for (let tasks of allTaskArrays) {
      const task = tasks.find(t => t.id === taskId);
      if (task) return task;
    }
  }
  return null;
}

// 업무 삭제 함수
function deleteTask(taskId) {
  if (!confirm('이 업무를 삭제하시겠습니까?')) return;
  
  for (let month in monthlyTasks) {
    const monthData = monthlyTasks[month];
    
    // custom_tasks에서만 삭제 허용
    if (monthData.custom_tasks) {
      const index = monthData.custom_tasks.findIndex(t => t.id === taskId);
      if (index !== -1) {
        monthData.custom_tasks.splice(index, 1);
        break;
      }
    }
  }
  
  updateTasksView();
  updateMonthlyProgress();
  updateAnnualProgress();
}

// 휴가 삭제 함수
function deleteLeave(vacationId) {
  if (!confirm('이 휴가 정보를 삭제하시겠습니까?')) return;
  
  const vacation = vacations.find(v => v.id === vacationId);
  if (vacation) {
    // 교사 상태 복원
    const teacher = teachers.find(t => t.id === vacation.teacher_id);
    if (teacher) {
      teacher.status = '정상근무';
      
      // 연가 사용일수 복원
      if (vacation.vacation_type === '연가') {
        teacher.used_leave -= vacation.days;
        teacher.remaining_leave += vacation.days;
      }
    }
    
    // 대체교사 상태 복원
    if (vacation.substitute_teacher_id) {
      const substitute = substituteTeachers.find(s => s.id === vacation.substitute_teacher_id);
      if (substitute) {
        substitute.available = true;
        substitute.current_assignment = null;
      }
    }
    
    // 휴가 정보 삭제
    const index = vacations.findIndex(v => v.id === vacationId);
    vacations.splice(index, 1);
  }
  
  updateLeaveView();
  updateLeaveSummary();
}

// 업무 완료 상태 변경
function toggleTaskCompletion(taskId, type, index = null) {
  const task = findTaskById(taskId);
  if (!task) return;
  
  if (type === 'week') {
    if (index !== null) {
      task.completed_weeks = task.completed_weeks || 0;
      const checkbox = document.querySelector(`input[data-task="${taskId}"][data-week="${index}"]`);
      if (checkbox && checkbox.checked) {
        task.completed_weeks++;
      } else {
        task.completed_weeks--;
      }
      task.completed_weeks = Math.max(0, Math.min(task.weeks, task.completed_weeks));
    }
  } else if (type === 'step') {
    if (!task.completed_steps) task.completed_steps = [];
    if (index !== null) {
      const stepIndex = task.completed_steps.indexOf(index);
      if (stepIndex === -1) {
        task.completed_steps.push(index);
      } else {
        task.completed_steps.splice(stepIndex, 1);
      }
    }
  }
  
  updateTasksView();
  updateMonthlyProgress();
  updateAnnualProgress();
}

// 업무 뷰 업데이트
function updateTasksView() {
  const container = document.getElementById('tasks-container');
  if (!container) return;
  
  container.innerHTML = '';
  
  const monthData = monthlyTasks[currentMonth];
  if (!monthData) return;
  
  // 모든 업무 카테고리 수집
  const allTaskArrays = [
    monthData.regular_tasks || [],
    monthData.special_tasks || [],
    monthData.preparation_tasks || [],
    monthData.custom_tasks || []
  ];
  
  const allTasks = allTaskArrays.flat();
  
  allTasks.forEach(task => {
    const taskCard = createTaskCard(task);
    container.appendChild(taskCard);
  });
}

// 업무 카드 생성
function createTaskCard(task) {
  const card = document.createElement('div');
  card.className = 'task-card';
  
  const isCompleted = isTaskCompleted(task);
  if (isCompleted) {
    card.classList.add('completed');
  }
  
  let progressContent = '';
  if ((task.type === '프로젝트업무' || task.type === '단계별업무') && task.steps) {
    const completedSteps = task.completed_steps || [];
    const progressPercent = (completedSteps.length / task.steps.length) * 100;
    
    progressContent = `
      <div class="task-progress">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progressPercent}%"></div>
        </div>
        <div class="task-steps">
          <h5>작업 단계:</h5>
          <ul class="steps-list">
            ${task.steps.map((step, index) => `
              <li class="step-item ${completedSteps.includes(index) ? 'completed' : ''}">
                <input type="checkbox" class="step-checkbox" data-task="${task.id}" data-step="${index}"
                       ${completedSteps.includes(index) ? 'checked' : ''}
                       onchange="toggleTaskCompletion('${task.id}', 'step', ${index})">
                <span class="step-text">${step}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  } else {
    // 정기업무, 특별업무, 준비업무 등의 경우
    const completedWeeks = task.completed_weeks || 0;
    const weeks = task.weeks || 1;
    const progressPercent = (completedWeeks / weeks) * 100;
    
    progressContent = `
      <div class="task-progress">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progressPercent}%"></div>
        </div>
        <div class="week-checkboxes">
          ${Array.from({length: weeks}, (_, i) => `
            <label class="week-checkbox">
              <input type="checkbox" data-task="${task.id}" data-week="${i}" 
                     ${completedWeeks > i ? 'checked' : ''} 
                     onchange="toggleTaskCompletion('${task.id}', 'week', ${i})">
              ${i + 1}주차
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  card.innerHTML = `
    <div class="task-header">
      <input type="checkbox" class="task-checkbox" ${isCompleted ? 'checked' : ''} readonly>
      <div class="task-info">
        <h4 class="task-name">${task.name}</h4>
        <span class="task-type">${task.type}</span>
        ${task.description ? `<p class="task-description">${task.description}</p>` : ''}
      </div>
    </div>
    ${progressContent}
    ${task.editable ? `
      <div class="task-actions">
        <button class="task-action-btn" onclick="openTaskModal('${task.id}')">편집</button>
        ${task.id.includes('custom_') ? `<button class="task-action-btn" onclick="deleteTask('${task.id}')">삭제</button>` : ''}
      </div>
    ` : ''}
  `;
  
  return card;
}

// 업무 완료 여부 확인
function isTaskCompleted(task) {
  if ((task.type === '프로젝트업무' || task.type === '단계별업무') && task.steps) {
    const completedSteps = task.completed_steps || [];
    return completedSteps.length >= task.steps.length;
  } else {
    const completedWeeks = task.completed_weeks || 0;
    const weeks = task.weeks || 1;
    return completedWeeks >= weeks;
  }
}

// 월별 진척률 업데이트
function updateMonthlyProgress() {
  const monthData = monthlyTasks[currentMonth];
  if (!monthData) return;
  
  const allTaskArrays = [
    monthData.regular_tasks || [],
    monthData.special_tasks || [],
    monthData.preparation_tasks || [],
    monthData.custom_tasks || []
  ];
  
  const allTasks = allTaskArrays.flat();
  const completedTasks = allTasks.filter(task => isTaskCompleted(task));
  
  const progressPercent = allTasks.length > 0 ? (completedTasks.length / allTasks.length) * 100 : 0;
  
  const progressBar = document.getElementById('monthly-progress');
  const progressText = document.getElementById('monthly-progress-text');
  
  if (progressBar) progressBar.style.width = `${progressPercent}%`;
  if (progressText) progressText.textContent = `${Math.round(progressPercent)}%`;
}

// 연간 진척률 업데이트
function updateAnnualProgress() {
  let totalTasks = 0;
  let completedTasks = 0;
  
  for (let month in monthlyTasks) {
    const monthData = monthlyTasks[month];
    const allTaskArrays = [
      monthData.regular_tasks || [],
      monthData.special_tasks || [],
      monthData.preparation_tasks || [],
      monthData.custom_tasks || []
    ];
    
    const allTasks = allTaskArrays.flat();
    totalTasks += allTasks.length;
    completedTasks += allTasks.filter(task => isTaskCompleted(task)).length;
  }
  
  const progressPercent = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  
  const progressBar = document.getElementById('annual-progress');
  const progressText = document.getElementById('annual-progress-text');
  
  if (progressBar) progressBar.style.width = `${progressPercent}%`;
  if (progressText) progressText.textContent = `${Math.round(progressPercent)}%`;
}

// 휴가 관리 뷰 업데이트
function updateLeaveView() {
  updateLeaveSummary();
  
  if (currentView === 'list') {
    updateTeachersList();
  } else if (currentView === 'table') {
    updateTeachersTable();
  } else if (currentView === 'substitute') {
    updateSubstituteList();
  } else if (currentView === 'summary') {
    updateVacationSummary();
  }
}

// 휴가 현황 요약 업데이트
function updateLeaveSummary() {
  const totalTeachers = teachers.length;
  const onLeave = teachers.filter(t => t.status === '휴직중').length;
  const pending = 0;
  const availableSubstitutes = substituteTeachers.filter(s => s.available).length;
  
  document.getElementById('total-teachers').textContent = totalTeachers;
  document.getElementById('current-on-leave').textContent = onLeave;
  document.getElementById('pending-applications').textContent = pending;
  document.getElementById('available-substitutes').textContent = availableSubstitutes;
}

// 교사 목록 업데이트
function updateTeachersList() {
  const container = document.getElementById('teachers-list');
  if (!container) return;
  
  container.innerHTML = '';
  
  teachers.forEach(teacher => {
    const card = document.createElement('div');
    card.className = 'teacher-card';
    
    const vacation = vacations.find(v => v.teacher_id === teacher.id && v.status === '승인');
    let statusInfo = '';
    
    if (vacation) {
      statusInfo = `
        <div class="teacher-status">
          <span class="status status--warning">${vacation.vacation_type}</span>
          <div class="teacher-details">
            ${vacation.start_date} ~ ${vacation.end_date} (${vacation.days}일)<br>
            ${vacation.substitute_teacher_name ? `대체: ${vacation.substitute_teacher_name}` : '대체교사 없음'}
          </div>
        </div>
      `;
    } else {
      statusInfo = `
        <div class="teacher-status">
          <span class="status status--success">${teacher.status}</span>
          <div class="teacher-details">연가 잔여: ${teacher.remaining_leave}일</div>
        </div>
      `;
    }
    
    card.innerHTML = `
      <div class="teacher-info">
        <h4 class="teacher-name">${teacher.name}</h4>
        <div class="teacher-details">${teacher.subject} | ${teacher.grade}</div>
      </div>
      ${statusInfo}
      <div class="teacher-actions">
        ${vacation ? `
          <button class="btn btn--sm btn--secondary" onclick="openLeaveModal('${vacation.id}')">편집</button>
          <button class="btn btn--sm btn--outline" onclick="deleteLeave('${vacation.id}')">삭제</button>
        ` : `
          <button class="btn btn--sm btn--primary" onclick="openLeaveModal()">휴가신청</button>
        `}
      </div>
    `;
    
    container.appendChild(card);
  });
}

// 교사 테이블 업데이트
function updateTeachersTable() {
  const tbody = document.getElementById('teachers-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  teachers.forEach(teacher => {
    const row = document.createElement('tr');
    const vacation = vacations.find(v => v.teacher_id === teacher.id && v.status === '승인');
    
    let substituteInfo = '-';
    if (vacation && vacation.substitute_teacher_name) {
      substituteInfo = vacation.substitute_teacher_name;
    }
    
    let statusCell = `<span class="status status--success">${teacher.status}</span>`;
    if (vacation) {
      statusCell = `<span class="status status--warning">${vacation.vacation_type}</span>`;
    }
    
    row.innerHTML = `
      <td>${teacher.name}</td>
      <td>${teacher.subject}</td>
      <td>${teacher.grade}</td>
      <td>${teacher.remaining_leave}일</td>
      <td>${statusCell}</td>
      <td>${substituteInfo}</td>
      <td>
        ${vacation ? `
          <button class="btn btn--sm btn--secondary" onclick="openLeaveModal('${vacation.id}')">편집</button>
          <button class="btn btn--sm btn--outline" onclick="deleteLeave('${vacation.id}')">삭제</button>
        ` : `
          <button class="btn btn--sm btn--primary" onclick="openLeaveModal()">휴가신청</button>
        `}
      </td>
    `;
    
    tbody.appendChild(row);
  });
}

// 기간제교사 목록 업데이트
function updateSubstituteList() {
  const container = document.getElementById('substitute-teachers-list');
  if (!container) return;
  
  container.innerHTML = '';
  
  substituteTeachers.forEach(substitute => {
    const card = document.createElement('div');
    card.className = `substitute-card ${substitute.available ? 'available' : 'assigned'}`;
    
    let assignmentInfo = '';
    if (!substitute.available && substitute.current_assignment) {
      const teacher = teachers.find(t => t.id === substitute.current_assignment);
      assignmentInfo = `<div class="substitute-assignment">현재 배정: ${teacher ? teacher.name : '알 수 없음'}</div>`;
    }
    
    card.innerHTML = `
      <div class="substitute-info">
        <h4 class="substitute-name">${substitute.name}</h4>
        <span class="status ${substitute.available ? 'status--success' : 'status--warning'}">
          ${substitute.available ? '대기중' : '배정됨'}
        </span>
      </div>
      <div class="substitute-subjects">담당 가능 과목: ${substitute.subjects.join(', ')}</div>
      ${assignmentInfo}
    `;
    
    container.appendChild(card);
  });
}

// 휴가 현황 차트 업데이트
function updateVacationSummary() {
  createVacationChart();
  updateSubstituteNeedList();
}

// 휴가 차트 생성
function createVacationChart() {
  const ctx = document.getElementById('vacationChart');
  if (!ctx) return;
  
  // 월별 휴가 데이터 계산
  const monthlyVacationData = Array(12).fill(0);
  
  vacations.forEach(vacation => {
    const startMonth = new Date(vacation.start_date).getMonth();
    const endMonth = new Date(vacation.end_date).getMonth();
    
    // 휴가가 걸쳐있는 모든 월에 카운트
    for (let month = startMonth; month <= endMonth; month++) {
      monthlyVacationData[month]++;
    }
  });
  
  if (vacationChart) {
    vacationChart.destroy();
  }
  
  vacationChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      datasets: [{
        label: '휴가자 수',
        data: monthlyVacationData,
        backgroundColor: '#1FB8CD',
        borderColor: '#1FB8CD',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

// 기간제교원 소요 목록 업데이트
function updateSubstituteNeedList() {
  const container = document.getElementById('substitute-need-list');
  if (!container) return;
  
  container.innerHTML = '';
  
  // 과목별 소요 계산
  const subjectNeeds = {};
  
  vacations.forEach(vacation => {
    const teacher = teachers.find(t => t.id === vacation.teacher_id);
    if (teacher) {
      const subject = teacher.subject;
      if (!subjectNeeds[subject]) {
        subjectNeeds[subject] = { needed: 0, available: 0 };
      }
      subjectNeeds[subject].needed++;
    }
  });
  
  // 가용 기간제교원 계산
  substituteTeachers.forEach(substitute => {
    substitute.subjects.forEach(subject => {
      if (!subjectNeeds[subject]) {
        subjectNeeds[subject] = { needed: 0, available: 0 };
      }
      if (substitute.available) {
        subjectNeeds[subject].available++;
      }
    });
  });
  
  Object.entries(subjectNeeds).forEach(([subject, needs]) => {
    const item = document.createElement('div');
    const isSufficient = needs.available >= needs.needed;
    item.className = `substitute-need-item ${isSufficient ? 'sufficient' : ''}`;
    
    item.innerHTML = `
      <h4>${subject}</h4>
      <div>필요: ${needs.needed}명 | 가용: ${needs.available}명</div>
      ${isSufficient ? 
        '<div style="color: var(--color-success)">✅ 충분</div>' : 
        `<div style="color: var(--color-error)">⚠️ ${needs.needed - needs.available}명 부족 - 신규 채용 필요</div>`
      }
    `;
    
    container.appendChild(item);
  });
}

// 교사 옵션 업데이트
function updateTeacherOptions() {
  const select = document.getElementById('leave-teacher');
  if (!select) return;
  
  select.innerHTML = '<option value="">교사를 선택해주세요</option>';
  
  teachers.forEach(teacher => {
    if (teacher.status === '정상근무') {
      const option = document.createElement('option');
      option.value = teacher.id;
      option.textContent = `${teacher.name} (${teacher.subject}, ${teacher.grade})`;
      select.appendChild(option);
    }
  });
}

// 대체교사 옵션 업데이트
function updateSubstituteOptions() {
  const select = document.getElementById('leave-substitute');
  if (!select) return;
  
  select.innerHTML = '<option value="">대체교사를 선택해주세요 (자동 매칭)</option>';
  
  substituteTeachers.forEach(substitute => {
    if (substitute.available) {
      const option = document.createElement('option');
      option.value = substitute.id;
      option.textContent = `${substitute.name} (${substitute.subjects.join(', ')})`;
      select.appendChild(option);
    }
  });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
  initializeEventListeners();
  updateTasksView();
  updateMonthlyProgress();
  updateAnnualProgress();
  updateLeaveView();
});