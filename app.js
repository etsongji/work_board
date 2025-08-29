// 데이터 초기화
let currentMonth = 1; // 1월로 시작 (기간제교원 계약 업무 확인용)
let currentView = 'list';
let editingTask = null;
let editingLeave = null;
let taskSteps = []; // 임시 단계 저장용

// 초기 데이터 - application_data_json 기반으로 완전 복원
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
    "special_tasks": [],
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
    "preparation_tasks": [],
    "custom_tasks": []
  },
  "10": {
    "month_name": "10월",
    "regular_tasks": [
      {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": "task_10_1", "editable": true, "completed_weeks": 0},
      {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_10_2", "editable": true, "weeks": 1, "completed_weeks": 0}
    ],
    "preparation_tasks": [
      {"name": "수능 업무 준비", "type": "준비업무", "description": "11월 수능 관련 업무 사전 준비", "id": "task_10_prep_1", "editable": true, "weeks": 2, "completed_weeks": 0}
    ],
    "special_tasks": [],
    "custom_tasks": []
  },
  "11": {
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
  },
  "12": {
    "month_name": "12월",
    "regular_tasks": [
      {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": "task_12_1", "editable": true, "completed_weeks": 0},
      {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": "task_12_2", "editable": true, "weeks": 1, "completed_weeks": 0}
    ],
    "special_tasks": [
      {"name": "학교평가", "type": "특별업무", "description": "12월 학교평가 준비 및 실시", "id": "task_12_special_1", "editable": true, "weeks": 3, "completed_weeks": 0}
    ],
    "preparation_tasks": [],
    "custom_tasks": []
  }
};

// 나머지 월들 초기화
for(let i = 4; i <= 9; i++) {
  if (!monthlyTasks[i]) {
    monthlyTasks[i] = {
      month_name: `${i}월`,
      regular_tasks: [
        {"name": "주간업무일지", "type": "정기업무", "description": "매주 작성하는 업무 보고서", "weeks": 4, "id": `task_${i}_1`, "editable": true, "completed_weeks": 0},
        {"name": "시간강사 수당 지급", "type": "정기업무", "description": "매월 말 시간강사 수당 처리", "id": `task_${i}_2`, "editable": true, "weeks": 1, "completed_weeks": 0}
      ],
      special_tasks: [],
      preparation_tasks: [],
      custom_tasks: []
    };
  }
}

const teachers = [
  {"id": "T001", "name": "김영희", "subject": "국어", "grade": "1학년", "status": "정상근무"},
  {"id": "T002", "name": "박민수", "subject": "수학", "grade": "2학년", "status": "정상근무"},
  {"id": "T003", "name": "이정은", "subject": "영어", "grade": "3학년", "status": "정상근무"},
  {"id": "T004", "name": "최수진", "subject": "과학", "grade": "1학년", "status": "정상근무"},
  {"id": "T005", "name": "장기용", "subject": "사회", "grade": "2학년", "status": "정상근무"},
  {"id": "T006", "name": "윤서연", "subject": "미술", "grade": "전학년", "status": "휴직중"},
  {"id": "T007", "name": "한동민", "subject": "체육", "grade": "전학년", "status": "정상근무"},
  {"id": "T008", "name": "정혜림", "subject": "음악", "grade": "전학년", "status": "정상근무"}
];

const substituteTeachers = [
  {"id": "S001", "name": "강나연", "subjects": ["국어", "사회"], "available": true, "current_assignment": null},
  {"id": "S002", "name": "임철호", "subjects": ["수학", "과학"], "available": true, "current_assignment": null},
  {"id": "S003", "name": "송미경", "subjects": ["영어"], "available": true, "current_assignment": null},
  {"id": "S004", "name": "오진석", "subjects": ["체육", "미술"], "available": false, "current_assignment": "T006"},
  {"id": "S005", "name": "안소희", "subjects": ["음악", "미술"], "available": true, "current_assignment": null}
];

let absences = [
  {
    "id": "A001",
    "teacher_id": "T006",
    "teacher_name": "윤서연",
    "absence_type": "육아휴직",
    "start_date": "2025-11-01",
    "end_date": "2026-01-31", 
    "substitute_teacher_id": "S004",
    "substitute_teacher_name": "오진석",
    "status": "승인",
    "reason": "만 8세 이하 자녀 양육을 위한 육아휴직 (교육공무원법 제44조 청원휴직)"
  }
];

// 메인 탭 전환 함수
function switchMainTab(tabName) {
  console.log('Switching to tab:', tabName);
  
  // 모든 탭 버튼에서 active 클래스 제거
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(btn => btn.classList.remove('active'));
  
  // 모든 탭 콘텐츠에서 active 클래스 제거
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => content.classList.remove('active'));
  
  // 선택된 탭 활성화
  if (tabName === 'tasks') {
    const tasksButton = document.querySelector('[onclick*="tasks"]');
    const tasksSection = document.getElementById('tasks-section');
    
    if (tasksButton) tasksButton.classList.add('active');
    if (tasksSection) tasksSection.classList.add('active');
    
    updateTasksView();
  } else if (tabName === 'leave') {
    const leaveButton = document.querySelector('[onclick*="leave"]');
    const leaveSection = document.getElementById('leave-section');
    
    if (leaveButton) leaveButton.classList.add('active');
    if (leaveSection) leaveSection.classList.add('active');
    
    updateLeaveView();
  }
}

// 월별 탭 전환
function switchMonth(month) {
  console.log('Switching to month:', month);
  currentMonth = month;
  
  // 월별 탭 업데이트
  document.querySelectorAll('.month-tab').forEach(tab => tab.classList.remove('active'));
  const monthTab = document.querySelector(`[onclick="switchMonth(${month})"]`);
  if (monthTab) monthTab.classList.add('active');
  
  // 월별 제목 및 콘텐츠 업데이트
  const monthlyTitle = document.getElementById('monthly-title');
  if (monthlyTitle) monthlyTitle.textContent = `${month}월 진척률`;
  
  updateTasksView();
  updateMonthlyProgress();
}

// 뷰 전환 (목록/테이블/기간제교사)
function switchView(viewName) {
  currentView = viewName;
  
  // 뷰 탭 업데이트
  document.querySelectorAll('.view-tab').forEach(tab => tab.classList.remove('active'));
  const viewTab = document.querySelector(`[onclick="switchView('${viewName}')"]`);
  if (viewTab) viewTab.classList.add('active');
  
  // 뷰 콘텐츠 업데이트
  document.querySelectorAll('.view-content').forEach(content => content.classList.remove('active'));
  const viewContent = document.getElementById(`${viewName}-view`);
  if (viewContent) viewContent.classList.add('active');
  
  updateLeaveView();
}

// 단계별 완료/미완료 토글 (기간제교원 계약 업무용)
function toggleStep(taskId, stepIndex) {
  console.log('Toggling step:', taskId, stepIndex);
  
  const task = findTaskById(taskId);
  if (!task || !task.steps) {
    console.error('Task not found or has no steps:', taskId);
    return;
  }
  
  if (!task.completed_steps) {
    task.completed_steps = [];
  }
  
  const completedIndex = task.completed_steps.indexOf(stepIndex);
  if (completedIndex > -1) {
    // 이미 완료된 단계면 제거
    task.completed_steps.splice(completedIndex, 1);
  } else {
    // 완료되지 않은 단계면 추가
    task.completed_steps.push(stepIndex);
  }
  
  console.log('Updated completed steps:', task.completed_steps);
  
  // UI 업데이트
  updateTasksView();
  updateMonthlyProgress();
  updateAnnualProgress();
}

// ID로 업무 찾기 - 개선된 버전
function findTaskById(taskId) {
  for (let month in monthlyTasks) {
    const monthData = monthlyTasks[month];
    const allTasks = [
      ...(monthData.regular_tasks || []), 
      ...(monthData.special_tasks || []), 
      ...(monthData.preparation_tasks || []), 
      ...(monthData.custom_tasks || [])
    ];
    const task = allTasks.find(t => t.id === taskId);
    if (task) return task;
  }
  return null;
}

// 업무 유형에 따른 필드 토글
function toggleTaskTypeFields() {
  const taskType = document.getElementById('task-type').value;
  const weeksGroup = document.getElementById('weeks-group');
  const stepsGroup = document.getElementById('steps-group');
  
  if (taskType === '정기업무' || taskType === '특별업무' || taskType === '준비업무') {
    if (weeksGroup) weeksGroup.classList.remove('hidden');
    if (stepsGroup) stepsGroup.classList.add('hidden');
  } else if (taskType === '프로젝트업무') {
    if (weeksGroup) weeksGroup.classList.add('hidden');
    if (stepsGroup) stepsGroup.classList.remove('hidden');
  } else {
    if (weeksGroup) weeksGroup.classList.add('hidden');
    if (stepsGroup) stepsGroup.classList.add('hidden');
  }
}

// 단계 추가
function addStep() {
  const stepInput = document.querySelector('.step-input');
  if (!stepInput) return;
  
  const stepText = stepInput.value.trim();
  
  if (!stepText) {
    alert('단계를 입력해주세요.');
    return;
  }
  
  if (taskSteps.includes(stepText)) {
    alert('이미 추가된 단계입니다.');
    return;
  }
  
  taskSteps.push(stepText);
  stepInput.value = '';
  updateStepsPreview();
}

// 단계 미리보기 업데이트
function updateStepsPreview() {
  const stepsList = document.getElementById('steps-list');
  if (!stepsList) return;
  
  stepsList.innerHTML = '';
  
  taskSteps.forEach((step, index) => {
    const stepItem = document.createElement('div');
    stepItem.className = 'step-preview-item';
    stepItem.innerHTML = `
      <span class="step-preview-text">${step}</span>
      <button type="button" class="step-remove-btn" onclick="removeStep(${index})">삭제</button>
    `;
    stepsList.appendChild(stepItem);
  });
}

// 단계 삭제
function removeStep(index) {
  taskSteps.splice(index, 1);
  updateStepsPreview();
}

// 업무 추가 모달 열기 - 수정된 버전
function openTaskModal(taskId = null) {
  console.log('Opening task modal:', taskId);
  
  editingTask = taskId;
  taskSteps = []; // 단계 초기화
  
  const modal = document.getElementById('task-modal');
  const title = document.getElementById('task-modal-title');
  
  if (!modal || !title) {
    console.error('Modal elements not found');
    return;
  }
  
  // 모달 표시 - 새로운 방식 사용
  modal.classList.remove('hidden');
  modal.classList.add('show');
  
  if (taskId) {
    title.textContent = '업무 편집';
    // 편집할 업무 데이터 로드
    const task = findTaskById(taskId);
    if (task) {
      const nameInput = document.getElementById('task-name');
      const typeInput = document.getElementById('task-type');
      const descriptionInput = document.getElementById('task-description');
      const weeksInput = document.getElementById('task-weeks');
      
      if (nameInput) nameInput.value = task.name;
      if (typeInput) {
        typeInput.value = task.type;
        toggleTaskTypeFields();
      }
      if (descriptionInput) descriptionInput.value = task.description || '';
      if (weeksInput) weeksInput.value = task.weeks || 4;
      
      // 단계가 있는 경우 로드
      if (task.steps) {
        taskSteps = [...task.steps];
        updateStepsPreview();
      }
      
      // 월 선택은 편집 시 현재 월만 선택
      const monthCheckboxes = document.querySelectorAll('input[name="task-months"]');
      monthCheckboxes.forEach(checkbox => {
        checkbox.checked = parseInt(checkbox.value) === currentMonth;
      });
    }
  } else {
    title.textContent = '업무 추가';
    const form = document.getElementById('task-form');
    if (form) form.reset();
    
    // 현재 월을 기본 선택
    const monthCheckboxes = document.querySelectorAll('input[name="task-months"]');
    monthCheckboxes.forEach(checkbox => {
      checkbox.checked = parseInt(checkbox.value) === currentMonth;
    });
    
    toggleTaskTypeFields();
    updateStepsPreview();
  }
  
  console.log('Modal should be visible now');
}

// 업무 추가 모달 닫기 - 수정된 버전
function closeTaskModal() {
  const modal = document.getElementById('task-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('show');
  }
  editingTask = null;
  taskSteps = [];
}

// 휴직 신청 모달 열기 - 수정된 버전
function openLeaveModal(leaveId = null) {
  console.log('Opening leave modal:', leaveId);
  
  editingLeave = leaveId;
  const modal = document.getElementById('leave-modal');
  const title = document.getElementById('leave-modal-title');
  
  if (!modal || !title) {
    console.error('Leave modal elements not found');
    return;
  }
  
  // 모달 표시 - 새로운 방식 사용
  modal.classList.remove('hidden');
  modal.classList.add('show');
  
  // 교사 목록 업데이트
  updateTeacherOptions();
  updateSubstituteOptions();
  
  if (leaveId) {
    title.textContent = '휴직 편집';
    // 편집할 휴직 데이터 로드
    const leave = absences.find(a => a.id === leaveId);
    if (leave) {
      const teacherSelect = document.getElementById('leave-teacher');
      const typeSelect = document.getElementById('leave-type');
      const startInput = document.getElementById('leave-start-date');
      const endInput = document.getElementById('leave-end-date');
      const substituteSelect = document.getElementById('leave-substitute');
      const reasonInput = document.getElementById('leave-reason');
      
      if (teacherSelect) teacherSelect.value = leave.teacher_id;
      if (typeSelect) typeSelect.value = leave.absence_type;
      if (startInput) startInput.value = leave.start_date;
      if (endInput) endInput.value = leave.end_date;
      if (substituteSelect) substituteSelect.value = leave.substitute_teacher_id || '';
      if (reasonInput) reasonInput.value = leave.reason;
    }
  } else {
    title.textContent = '휴직 신청';
    const form = document.getElementById('leave-form');
    if (form) form.reset();
  }
}

// 휴직 신청 모달 닫기 - 수정된 버전
function closeLeaveModal() {
  const modal = document.getElementById('leave-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('show');
  }
  editingLeave = null;
}

// 업무 저장
function saveTask() {
  const nameInput = document.getElementById('task-name');
  const typeInput = document.getElementById('task-type');
  const descriptionInput = document.getElementById('task-description');
  const weeksInput = document.getElementById('task-weeks');
  const monthCheckboxes = document.querySelectorAll('input[name="task-months"]:checked');
  
  if (!nameInput || !typeInput) {
    alert('필수 입력 필드를 찾을 수 없습니다.');
    return;
  }
  
  const name = nameInput.value.trim();
  const type = typeInput.value;
  const description = descriptionInput ? descriptionInput.value.trim() : '';
  const weeks = weeksInput ? parseInt(weeksInput.value) : 4;
  
  if (!name) {
    alert('업무명을 입력해주세요.');
    return;
  }
  
  if (monthCheckboxes.length === 0) {
    alert('최소 1개월은 선택해주세요.');
    return;
  }
  
  // 프로젝트업무인데 단계가 없는 경우
  if (type === '프로젝트업무' && taskSteps.length === 0) {
    alert('프로젝트업무는 최소 1개의 단계가 필요합니다.');
    return;
  }
  
  const selectedMonths = Array.from(monthCheckboxes).map(cb => parseInt(cb.value));
  
  const taskData = {
    name: name,
    type: type,
    description: description,
    editable: true
  };
  
  // 업무 유형에 따른 추가 데이터 설정
  if (type === '정기업무' || type === '특별업무' || type === '준비업무') {
    taskData.weeks = weeks;
    taskData.completed_weeks = 0;
  } else if (type === '프로젝트업무') {
    taskData.steps = [...taskSteps];
    taskData.completed_steps = [];
  }
  
  if (editingTask) {
    // 기존 업무 편집 (현재 월에서만)
    const task = findTaskById(editingTask);
    if (task) {
      Object.assign(task, taskData);
      task.id = editingTask; // ID 유지
    }
  } else {
    // 새 업무 추가 (선택된 모든 월에)
    selectedMonths.forEach(month => {
      const newTask = {
        ...taskData,
        id: `custom_${month}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
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

// 휴직 저장
function saveLeave() {
  const teacherSelect = document.getElementById('leave-teacher');
  const typeSelect = document.getElementById('leave-type');
  const startInput = document.getElementById('leave-start-date');
  const endInput = document.getElementById('leave-end-date');
  const substituteSelect = document.getElementById('leave-substitute');
  const reasonInput = document.getElementById('leave-reason');
  
  if (!teacherSelect || !typeSelect || !startInput || !endInput || !reasonInput) {
    alert('필수 입력 필드를 찾을 수 없습니다.');
    return;
  }
  
  const teacherId = teacherSelect.value;
  const type = typeSelect.value;
  const startDate = startInput.value;
  const endDate = endInput.value;
  const substituteId = substituteSelect ? substituteSelect.value : '';
  const reason = reasonInput.value.trim();
  
  if (!teacherId || !type || !startDate || !endDate || !reason) {
    alert('모든 필수 항목을 입력해주세요.');
    return;
  }
  
  const teacher = teachers.find(t => t.id === teacherId);
  const substitute = substituteTeachers.find(s => s.id === substituteId);
  
  const leaveData = {
    id: editingLeave || `A${Date.now()}`,
    teacher_id: teacherId,
    teacher_name: teacher.name,
    absence_type: type,
    start_date: startDate,
    end_date: endDate,
    substitute_teacher_id: substituteId || null,
    substitute_teacher_name: substitute ? substitute.name : null,
    status: '승인',
    reason: reason
  };
  
  if (editingLeave) {
    // 기존 휴직 편집
    const index = absences.findIndex(a => a.id === editingLeave);
    if (index !== -1) {
      // 기존 대체교사 상태 복원
      const oldLeave = absences[index];
      if (oldLeave.substitute_teacher_id) {
        const oldSubstitute = substituteTeachers.find(s => s.id === oldLeave.substitute_teacher_id);
        if (oldSubstitute) {
          oldSubstitute.available = true;
          oldSubstitute.current_assignment = null;
        }
      }
      
      absences[index] = leaveData;
    }
  } else {
    // 새 휴직 추가
    absences.push(leaveData);
  }
  
  // 교사 상태 업데이트
  teacher.status = '휴직중';
  
  // 대체교사 상태 업데이트
  if (substitute) {
    substitute.available = false;
    substitute.current_assignment = teacherId;
  }
  
  closeLeaveModal();
  updateLeaveView();
  updateLeaveSummary();
}

// 업무 삭제
function deleteTask(taskId) {
  if (!confirm('이 업무를 삭제하시겠습니까?')) return;
  
  for (let month in monthlyTasks) {
    const monthData = monthlyTasks[month];
    let tasks = monthData.custom_tasks || [];
    const index = tasks.findIndex(t => t.id === taskId);
    if (index !== -1) {
      tasks.splice(index, 1);
      break;
    }
  }
  
  updateTasksView();
  updateMonthlyProgress();
  updateAnnualProgress();
}

// 업무 복제
function duplicateTask(taskId) {
  const task = findTaskById(taskId);
  if (!task) return;
  
  const newTask = {
    ...task,
    id: `custom_${currentMonth}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    name: `${task.name} (복사본)`,
    completed_weeks: 0,
    completed_steps: []
  };
  
  if (!monthlyTasks[currentMonth].custom_tasks) {
    monthlyTasks[currentMonth].custom_tasks = [];
  }
  monthlyTasks[currentMonth].custom_tasks.push(newTask);
  
  updateTasksView();
  updateMonthlyProgress();
  updateAnnualProgress();
}

// 휴직 삭제
function deleteLeave(leaveId) {
  if (!confirm('이 휴직 정보를 삭제하시겠습니까?')) return;
  
  const leave = absences.find(a => a.id === leaveId);
  if (leave) {
    // 교사 상태 복원
    const teacher = teachers.find(t => t.id === leave.teacher_id);
    if (teacher) {
      teacher.status = '정상근무';
    }
    
    // 대체교사 상태 복원
    if (leave.substitute_teacher_id) {
      const substitute = substituteTeachers.find(s => s.id === leave.substitute_teacher_id);
      if (substitute) {
        substitute.available = true;
        substitute.current_assignment = null;
      }
    }
    
    // 휴직 정보 삭제
    const index = absences.findIndex(a => a.id === leaveId);
    absences.splice(index, 1);
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
  console.log('Updating tasks view for month:', currentMonth);
  
  const container = document.getElementById('tasks-container');
  if (!container) {
    console.error('Tasks container not found');
    return;
  }
  
  container.innerHTML = '';
  
  const monthData = monthlyTasks[currentMonth];
  if (!monthData) {
    console.error('Month data not found for month:', currentMonth);
    return;
  }
  
  const allTasks = [
    ...(monthData.regular_tasks || []), 
    ...(monthData.special_tasks || []), 
    ...(monthData.preparation_tasks || []), 
    ...(monthData.custom_tasks || [])
  ];
  
  console.log('All tasks for month', currentMonth, ':', allTasks);
  
  if (allTasks.length === 0) {
    container.innerHTML = '<div class="card"><div class="card__body"><p>이 달에는 등록된 업무가 없습니다.</p></div></div>';
    return;
  }
  
  allTasks.forEach(task => {
    const taskCard = createTaskCard(task);
    container.appendChild(taskCard);
  });
  
  console.log('Tasks view updated successfully');
}

// 업무 카드 생성 - 기간제교원 계약 단계 완전 지원
function createTaskCard(task) {
  console.log('Creating task card for:', task.name, 'Type:', task.type);
  
  const card = document.createElement('div');
  card.className = 'task-card';
  
  const isCompleted = isTaskCompleted(task);
  if (isCompleted) {
    card.classList.add('completed');
  }
  
  let progressContent = '';
  
  if (task.type === '정기업무' || task.type === '특별업무' || task.type === '준비업무') {
    if (task.weeks) {
      const completedWeeks = task.completed_weeks || 0;
      const progressPercent = (completedWeeks / task.weeks) * 100;
      
      progressContent = `
        <div class="task-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progressPercent}%"></div>
          </div>
          <div class="week-checkboxes">
            ${Array.from({length: task.weeks}, (_, i) => `
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
  } else if (task.type === '프로젝트업무' && task.steps) {
    console.log('Creating project task card with steps:', task.steps);
    
    const completedSteps = task.completed_steps || [];
    const progressPercent = (completedSteps.length / task.steps.length) * 100;
    
    progressContent = `
      <div class="task-progress">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progressPercent}%"></div>
        </div>
        <div class="contract-steps">
          <h5>작업 단계 (${completedSteps.length}/${task.steps.length}):</h5>
          ${task.steps.map((step, index) => `
            <div class="contract-step ${completedSteps.includes(index) ? 'completed' : ''}">
              <div class="step-number">${index + 1}</div>
              <div class="step-checkbox ${completedSteps.includes(index) ? 'checked' : ''}" 
                   onclick="toggleStep('${task.id}', ${index})"></div>
              <span class="step-label">${step}</span>
            </div>
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
        <button class="task-action-btn" onclick="duplicateTask('${task.id}')">복제</button>
        ${task.id.includes('custom_') ? `<button class="task-action-btn" onclick="deleteTask('${task.id}')">삭제</button>` : ''}
      </div>
    ` : ''}
  `;
  
  return card;
}

// 업무 완료 여부 확인
function isTaskCompleted(task) {
  if ((task.type === '정기업무' || task.type === '특별업무' || task.type === '준비업무') && task.weeks) {
    return (task.completed_weeks || 0) >= task.weeks;
  } else if (task.type === '프로젝트업무' && task.steps) {
    const completedSteps = task.completed_steps || [];
    return completedSteps.length >= task.steps.length;
  }
  return false;
}

// 월별 진척률 업데이트
function updateMonthlyProgress() {
  const monthData = monthlyTasks[currentMonth];
  if (!monthData) return;
  
  const allTasks = [
    ...(monthData.regular_tasks || []), 
    ...(monthData.special_tasks || []), 
    ...(monthData.preparation_tasks || []), 
    ...(monthData.custom_tasks || [])
  ];
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
    const allTasks = [
      ...(monthData.regular_tasks || []), 
      ...(monthData.special_tasks || []), 
      ...(monthData.preparation_tasks || []), 
      ...(monthData.custom_tasks || [])
    ];
    totalTasks += allTasks.length;
    completedTasks += allTasks.filter(task => isTaskCompleted(task)).length;
  }
  
  const progressPercent = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  
  const progressBar = document.getElementById('annual-progress');
  const progressText = document.getElementById('annual-progress-text');
  
  if (progressBar) progressBar.style.width = `${progressPercent}%`;
  if (progressText) progressText.textContent = `${Math.round(progressPercent)}%`;
}

// 휴직 관리 뷰 업데이트
function updateLeaveView() {
  updateLeaveSummary();
  
  if (currentView === 'list') {
    updateTeachersList();
  } else if (currentView === 'table') {
    updateTeachersTable();
  } else if (currentView === 'substitute') {
    updateSubstituteList();
  }
}

// 휴직 현황 요약 업데이트
function updateLeaveSummary() {
  const totalTeachers = teachers.length;
  const onLeave = teachers.filter(t => t.status === '휴직중').length;
  const pending = 0;
  const availableSubstitutes = substituteTeachers.filter(s => s.available).length;
  
  const totalElement = document.getElementById('total-teachers');
  const onLeaveElement = document.getElementById('current-on-leave');
  const pendingElement = document.getElementById('pending-applications');
  const availableElement = document.getElementById('available-substitutes');
  
  if (totalElement) totalElement.textContent = totalTeachers;
  if (onLeaveElement) onLeaveElement.textContent = onLeave;
  if (pendingElement) pendingElement.textContent = pending;
  if (availableElement) availableElement.textContent = availableSubstitutes;
}

// 교사 목록 업데이트 (목록 뷰)
function updateTeachersList() {
  const container = document.getElementById('teachers-list');
  if (!container) return;
  
  container.innerHTML = '';
  
  teachers.forEach(teacher => {
    const card = document.createElement('div');
    card.className = 'teacher-card';
    
    const absence = absences.find(a => a.teacher_id === teacher.id);
    let statusInfo = '';
    
    if (teacher.status === '휴직중' && absence) {
      statusInfo = `
        <div class="teacher-status">
          <span class="status status--warning">${absence.absence_type}</span>
          <div class="teacher-details">
            ${absence.start_date} ~ ${absence.end_date}
            ${absence.substitute_teacher_name ? `<br>대체: ${absence.substitute_teacher_name}` : ''}
          </div>
        </div>
      `;
    } else {
      statusInfo = `
        <div class="teacher-status">
          <span class="status status--success">${teacher.status}</span>
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
        ${absence ? `
          <button class="btn btn--sm btn--secondary" onclick="openLeaveModal('${absence.id}')">편집</button>
          <button class="btn btn--sm btn--outline" onclick="deleteLeave('${absence.id}')">삭제</button>
        ` : `
          <button class="btn btn--sm btn--primary" onclick="openLeaveModal()">휴직신청</button>
        `}
      </div>
    `;
    
    container.appendChild(card);
  });
}

// 교사 테이블 업데이트 (테이블 뷰)
function updateTeachersTable() {
  const tbody = document.getElementById('teachers-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  teachers.forEach(teacher => {
    const row = document.createElement('tr');
    const absence = absences.find(a => a.teacher_id === teacher.id);
    
    let substituteInfo = '-';
    if (absence && absence.substitute_teacher_name) {
      substituteInfo = absence.substitute_teacher_name;
    }
    
    let statusCell = `<span class="status status--success">${teacher.status}</span>`;
    if (teacher.status === '휴직중' && absence) {
      statusCell = `<span class="status status--warning">${absence.absence_type}</span>`;
    }
    
    row.innerHTML = `
      <td>${teacher.name}</td>
      <td>${teacher.subject}</td>
      <td>${teacher.grade}</td>
      <td>${statusCell}</td>
      <td>${substituteInfo}</td>
      <td>
        ${absence ? `
          <button class="btn btn--sm btn--secondary" onclick="openLeaveModal('${absence.id}')">편집</button>
          <button class="btn btn--sm btn--outline" onclick="deleteLeave('${absence.id}')">삭제</button>
        ` : `
          <button class="btn btn--sm btn--primary" onclick="openLeaveModal()">휴직신청</button>
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

// 교사 옵션 업데이트 (휴직 신청 모달용)
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

// 대체교사 옵션 업데이트 (휴직 신청 모달용)
function updateSubstituteOptions() {
  const select = document.getElementById('leave-substitute');
  if (!select) return;
  
  select.innerHTML = '<option value="">대체교사를 선택해주세요</option>';
  
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
  console.log('DOM loaded, initializing...');
  
  // 1월로 초기화 (기간제교원 계약 업무 확인용)
  switchMonth(1);
  
  updateTasksView();
  updateMonthlyProgress();
  updateAnnualProgress();
  updateLeaveView();
  
  console.log('Initialization complete');
});

// 모달 외부 클릭 시 닫기
window.addEventListener('click', function(event) {
  const taskModal = document.getElementById('task-modal');
  const leaveModal = document.getElementById('leave-modal');
  
  if (event.target === taskModal) {
    closeTaskModal();
  }
  if (event.target === leaveModal) {
    closeLeaveModal();
  }
});