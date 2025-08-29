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
        {"id": "T001", "name": "김영희", "subject": "국어", "grade": "1학년", "status": "정상근무"},
        {"id": "T002", "name": "박민수", "subject": "수학", "grade": "2학년", "status": "정상근무"},
        {"id": "T003", "name": "이정은", "subject": "영어", "grade": "3학년", "status": "정상근무"},
        {"id": "T004", "name": "최수진", "subject": "과학", "grade": "1학년", "status": "정상근무"},
        {"id": "T005", "name": "장기용", "subject": "사회", "grade": "2학년", "status": "정상근무"},
        {"id": "T006", "name": "윤서연", "subject": "미술", "grade": "전학년", "status": "휴직중"},
        {"id": "T007", "name": "한동민", "subject": "체육", "grade": "전학년", "status": "정상근무"},
        {"id": "T008", "name": "정혜림", "subject": "음악", "grade": "전학년", "status": "정상근무"}
    ],
    "substitute_teachers": [
        {"id": "S001", "name": "강나연", "subjects": ["국어", "사회"], "available": true, "current_assignment": null},
        {"id": "S002", "name": "임철호", "subjects": ["수학", "과학"], "available": true, "current_assignment": null},
        {"id": "S003", "name": "송미경", "subjects": ["영어"], "available": true, "current_assignment": null},
        {"id": "S004", "name": "오진석", "subjects": ["체육", "미술"], "available": false, "current_assignment": "T006"},
        {"id": "S005", "name": "안소희", "subjects": ["음악", "미술"], "available": true, "current_assignment": null}
    ],
    "absences": [
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
            "reason": "만 8세 이하 자녀 양육을 위한 육아휴직 (교육공무원법 제44조 청원휴직)",
            "approval_date": "2025-10-15"
        }
    ],
    "absence_types": {
        "직권휴직": [
            "질병휴직", "병역휴직", "생사불명휴직", "법정의무수행휴직", "노조전임자휴직"
        ],
        "청원휴직": [
            "유학휴직", "고용휴직", "육아휴직", "입양휴직", "불임·난임휴직", 
            "연수휴직", "가족돌봄휴직", "동반휴직", "자율연수휴직"
        ]
    },
    "task_types": ["정기업무", "특별업무", "준비업무", "프로젝트업무"]
};

// Global state
let currentMonth = 1;
let currentActiveTab = 'task-management';
let currentAbsenceView = 'list';
let taskStates = {};
let editingTaskData = null;
let editingAbsenceId = null;
let taskIdCounter = 1000;
let absenceIdCounter = 2;
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
        taskContent.innerHTML = '<div class="no-data">해당 월의 업무 데이터가 없습니다.</div>';
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
                         onclick="toggleTaskCompletion(${month}, '${taskId}')">
                    </div>
                    <h5 class="task-title">${task.name}</h5>
                    <span class="task-type-badge task-type-${getTaskTypeClass(task.type)}">${task.type}</span>
                </div>
        `;
        
        if (task.description) {
            cardHtml += `<p class="task-description">${task.description}</p>`;
        }
        
        // Task actions for all tasks (not just custom ones)
        cardHtml += `
            <div class="task-actions">
                <button class="btn-task-action btn-task-edit" 
                        data-month="${month}" data-task="${taskId}" 
                        onclick="editTask(${month}, '${taskId}')" 
                        title="편집"></button>
                <button class="btn-task-action btn-task-delete" 
                        data-month="${month}" data-task="${taskId}" 
                        onclick="deleteTask(${month}, '${taskId}')" 
                        title="삭제"></button>
                <button class="btn-task-action btn-task-duplicate" 
                        data-month="${month}" data-task="${taskId}" 
                        onclick="duplicateTask(${month}, '${taskId}')" 
                        title="복제"></button>
            </div>
        `;
        
        // Weekly tasks
        if (task.weeks) {
            cardHtml += '<div class="weekly-checklist">';
            for (let week = 1; week <= task.weeks; week++) {
                const subtaskKey = `week_${week}`;
                const isSubtaskCompleted = taskState.subtasks[subtaskKey];
                cardHtml += `
                    <div class="week-item">
                        <div class="week-checkbox ${isSubtaskCompleted ? 'checked' : ''}" 
                             onclick="toggleTaskCompletion(${month}, '${taskId}', '${subtaskKey}')">
                        </div>
                        <span class="week-label">${week}주차</span>
                    </div>
                `;
            }
            cardHtml += '</div>';
        }
        
        // Contract steps
        if (task.steps && task.steps.length > 0) {
            cardHtml += '<div class="contract-steps">';
            task.steps.forEach((step, stepIndex) => {
                const subtaskKey = `step_${stepIndex}`;
                const isSubtaskCompleted = taskState.subtasks[subtaskKey];
                cardHtml += `
                    <div class="contract-step ${isSubtaskCompleted ? 'completed' : ''}">
                        <span class="step-number">${stepIndex + 1}</span>
                        <div class="step-checkbox ${isSubtaskCompleted ? 'checked' : ''}" 
                             onclick="toggleTaskCompletion(${month}, '${taskId}', '${subtaskKey}')">
                        </div>
                        <span class="step-label">${step}</span>
                    </div>
                `;
            });
            cardHtml += '</div>';
        }
        
        cardHtml += '</div>';
        return cardHtml;
    }
    
    // Render different task categories
    const categories = [
        { key: 'regular_tasks', title: '정기 업무' },
        { key: 'special_tasks', title: '특별 업무' },
        { key: 'preparation_tasks', title: '준비 업무' },
        { key: 'custom_tasks', title: '추가 업무' }
    ];
    
    categories.forEach(category => {
        const tasks = monthData[category.key];
        if (tasks && tasks.length > 0) {
            html += `
                <div class="task-section">
                    <h4>${category.title}</h4>
                    ${tasks.map(task => renderTaskCard(task, task.id, category.key)).join('')}
                </div>
            `;
        }
    });
    
    if (!html) {
        html = '<div class="no-data">이번 달에는 등록된 업무가 없습니다.</div>';
    }
    
    taskContent.innerHTML = html;
    
    // Re-attach event listeners after rendering
    setTimeout(() => {
        addTaskEventListeners();
    }, 10);
}

// Add event listeners to task elements
function addTaskEventListeners() {
    // Event listeners are handled by inline onclick handlers in the HTML
    // This function is kept for potential future enhancements
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

// Switch main tabs
function switchMainTab(tabName) {
    currentActiveTab = tabName;
    
    // Update tab buttons
    document.querySelectorAll('.main-nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    event.target.classList.add('active');
    
    // Show/hide tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    document.getElementById(tabName).classList.add('active');
    
    // Initialize appropriate view
    if (tabName === 'absence-management') {
        renderAbsenceStats();
        renderAbsenceView(currentAbsenceView);
    }
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
    
    // Populate steps if exists
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
                <input type="text" class="form-control step-text" placeholder="단계 설명을 입력하세요">
                <button type="button" class="btn-remove-step" onclick="removeStep(this)">×</button>
            </div>
        `;
    }
}

function populateStepsContainer(steps) {
    const stepsContainer = document.getElementById('steps-container');
    if (stepsContainer && steps) {
        stepsContainer.innerHTML = steps.map(step => `
            <div class="step-input">
                <input type="text" class="form-control step-text" value="${step}" placeholder="단계 설명을 입력하세요">
                <button type="button" class="btn-remove-step" onclick="removeStep(this)">×</button>
            </div>
        `).join('');
    }
}

function addStep() {
    const stepsContainer = document.getElementById('steps-container');
    if (stepsContainer) {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'step-input';
        stepDiv.innerHTML = `
            <input type="text" class="form-control step-text" placeholder="단계 설명을 입력하세요">
            <button type="button" class="btn-remove-step" onclick="removeStep(this)">×</button>
        `;
        stepsContainer.appendChild(stepDiv);
    }
}

function removeStep(button) {
    const stepsContainer = document.getElementById('steps-container');
    const stepInputs = stepsContainer.querySelectorAll('.step-input');
    
    if (stepInputs.length > 1) {
        button.parentElement.remove();
    }
}

function updateTaskFormVisibility() {
    // This function can be used to show/hide form fields based on selections
    // Currently not needed but kept for future enhancements
}

function handleTaskSubmit(event) {
    event.preventDefault();
    
    const taskName = document.getElementById('task-name').value;
    const taskType = document.getElementById('task-type').value;
    const taskDescription = document.getElementById('task-description').value;
    const weeksCount = parseInt(document.getElementById('weeks-count').value);
    
    // Get selected months
    const selectedMonths = [];
    document.querySelectorAll('.month-checkboxes input[type="checkbox"]:checked').forEach(checkbox => {
        selectedMonths.push(parseInt(checkbox.value));
    });
    
    // Get steps
    const steps = [];
    document.querySelectorAll('.step-text').forEach(input => {
        if (input.value.trim()) {
            steps.push(input.value.trim());
        }
    });
    
    if (!taskName.trim()) {
        showMessage('업무명을 입력해주세요.', 'error');
        return;
    }
    
    if (!taskType) {
        showMessage('업무 유형을 선택해주세요.', 'error');
        return;
    }
    
    if (selectedMonths.length === 0) {
        showMessage('최소 한 개의 월을 선택해주세요.', 'error');
        return;
    }
    
    const taskData = {
        name: taskName.trim(),
        type: taskType,
        description: taskDescription.trim(),
        weeks: weeksCount,
        editable: true
    };
    
    if (steps.length > 0) {
        taskData.steps = steps;
        delete taskData.weeks; // Use steps instead of weeks
    }
    
    if (editingTaskData && editingTaskData.originalId) {
        // Update existing task
        updateExistingTask(editingTaskData.originalId, taskData, selectedMonths);
        showMessage('업무가 수정되었습니다.', 'success');
    } else {
        // Add new task
        selectedMonths.forEach(month => {
            const monthStr = month.toString();
            if (!appData.monthly_tasks[monthStr].custom_tasks) {
                appData.monthly_tasks[monthStr].custom_tasks = [];
            }
            
            const newTaskData = {
                ...taskData,
                id: generateTaskId()
            };
            
            appData.monthly_tasks[monthStr].custom_tasks.push(newTaskData);
            
            // Initialize task state
            if (!taskStates[month]) taskStates[month] = {};
            taskStates[month][newTaskData.id] = {
                completed: false,
                subtasks: {}
            };
            
            if (newTaskData.weeks) {
                for (let week = 1; week <= newTaskData.weeks; week++) {
                    taskStates[month][newTaskData.id].subtasks[`week_${week}`] = false;
                }
            }
            
            if (newTaskData.steps) {
                newTaskData.steps.forEach((step, stepIndex) => {
                    taskStates[month][newTaskData.id].subtasks[`step_${stepIndex}`] = false;
                });
            }
        });
        
        showMessage('업무가 추가되었습니다.', 'success');
    }
    
    closeTaskModal();
    renderTasks(currentMonth);
    updateProgress();
}

function updateExistingTask(taskId, newTaskData, selectedMonths) {
    // Remove task from all months first
    for (let month = 1; month <= 12; month++) {
        removeTaskFromData(taskId, month);
    }
    
    // Add to selected months
    selectedMonths.forEach(month => {
        const monthStr = month.toString();
        if (!appData.monthly_tasks[monthStr].custom_tasks) {
            appData.monthly_tasks[monthStr].custom_tasks = [];
        }
        
        const updatedTaskData = {
            ...newTaskData,
            id: taskId
        };
        
        appData.monthly_tasks[monthStr].custom_tasks.push(updatedTaskData);
        
        // Update task state
        if (!taskStates[month]) taskStates[month] = {};
        if (!taskStates[month][taskId]) {
            taskStates[month][taskId] = {
                completed: false,
                subtasks: {}
            };
        }
        
        // Clear existing subtasks and create new ones
        taskStates[month][taskId].subtasks = {};
        
        if (updatedTaskData.weeks) {
            for (let week = 1; week <= updatedTaskData.weeks; week++) {
                taskStates[month][taskId].subtasks[`week_${week}`] = false;
            }
        }
        
        if (updatedTaskData.steps) {
            updatedTaskData.steps.forEach((step, stepIndex) => {
                taskStates[month][taskId].subtasks[`step_${stepIndex}`] = false;
            });
        }
    });
}

function removeTaskFromData(taskId, month) {
    const monthData = appData.monthly_tasks[month.toString()];
    const categories = ['regular_tasks', 'special_tasks', 'preparation_tasks', 'custom_tasks'];
    
    categories.forEach(category => {
        if (monthData[category]) {
            const index = monthData[category].findIndex(t => t.id === taskId);
            if (index !== -1) {
                monthData[category].splice(index, 1);
            }
        }
    });
    
    // Also remove from task states
    if (taskStates[month] && taskStates[month][taskId]) {
        delete taskStates[month][taskId];
    }
}

// Absence Management Functions
function renderAbsenceStats() {
    const totalTeachers = appData.teachers.length;
    const currentAbsence = appData.teachers.filter(t => t.status === '휴직중').length;
    const pendingAbsence = appData.absences.filter(a => a.status === '대기').length;
    const availableSubstitutes = appData.substitute_teachers.filter(s => s.available).length;
    
    document.getElementById('total-teachers').textContent = totalTeachers;
    document.getElementById('current-absence').textContent = currentAbsence;
    document.getElementById('pending-absence').textContent = pendingAbsence;
    document.getElementById('available-substitutes').textContent = availableSubstitutes;
}

function switchAbsenceView(viewName) {
    currentAbsenceView = viewName;
    
    // Update view buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Show/hide views
    document.querySelectorAll('.absence-view').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById(`${viewName}-view`).classList.add('active');
    
    renderAbsenceView(viewName);
}

function renderAbsenceView(viewName) {
    switch (viewName) {
        case 'list':
            renderAbsenceList();
            break;
        case 'table':
            renderAbsenceTable();
            break;
        case 'substitutes':
            renderSubstitutes();
            break;
    }
}

function renderAbsenceList() {
    const absenceList = document.getElementById('absence-list');
    
    if (appData.absences.length === 0) {
        absenceList.innerHTML = '<div class="no-data">현재 등록된 휴직이 없습니다.</div>';
        return;
    }
    
    let html = '';
    appData.absences.forEach(absence => {
        html += `
            <div class="absence-item">
                <div class="absence-header">
                    <div class="absence-info">
                        <h4>${absence.teacher_name}</h4>
                        <span class="absence-type ${absence.absence_type}">${absence.absence_type}</span>
                    </div>
                    <div class="absence-actions">
                        <button class="btn btn--sm btn--secondary" onclick="editAbsence('${absence.id}')">편집</button>
                        <button class="btn btn--sm btn--outline" onclick="deleteAbsence('${absence.id}')">삭제</button>
                    </div>
                </div>
                <div class="absence-details">
                    <p><strong>휴직기간:</strong> ${absence.start_date} ~ ${absence.end_date || '미정'}</p>
                    <p><strong>대체교사:</strong> ${absence.substitute_teacher_name || '미지정'}</p>
                    <p><strong>승인상태:</strong> <span class="status status--${absence.status === '승인' ? 'success' : absence.status === '대기' ? 'warning' : 'error'}">${absence.status}</span></p>
                    <p><strong>사유:</strong> ${absence.reason}</p>
                </div>
            </div>
        `;
    });
    
    absenceList.innerHTML = html;
}

function renderAbsenceTable() {
    const tableBody = document.getElementById('absence-table-body');
    
    let html = '';
    appData.teachers.forEach(teacher => {
        const absence = appData.absences.find(a => a.teacher_id === teacher.id);
        
        html += `
            <tr>
                <td>${teacher.name}</td>
                <td>${teacher.subject}</td>
                <td>${teacher.grade}</td>
                <td>${absence ? absence.absence_type : '-'}</td>
                <td>${absence ? `${absence.start_date} ~ ${absence.end_date || '미정'}` : '-'}</td>
                <td>${absence?.substitute_teacher_name || '-'}</td>
                <td><span class="teacher-status ${teacher.status}">${teacher.status}</span></td>
                <td>
                    ${absence ? `
                        <button class="btn btn--sm btn--secondary" onclick="editAbsence('${absence.id}')">편집</button>
                        <button class="btn btn--sm btn--outline" onclick="deleteAbsence('${absence.id}')">삭제</button>
                    ` : `
                        <button class="btn btn--sm btn--primary" onclick="openAbsenceModal('${teacher.id}')">휴직신청</button>
                    `}
                </td>
            </tr>
        `;
    });
    
    tableBody.innerHTML = html;
}

function renderSubstitutes() {
    const substitutesGrid = document.getElementById('substitutes-grid');
    
    let html = '';
    appData.substitute_teachers.forEach(substitute => {
        const assignment = substitute.current_assignment ? 
            appData.teachers.find(t => t.id === substitute.current_assignment) : null;
        
        html += `
            <div class="substitute-card ${substitute.available ? 'available' : 'busy'}">
                <div class="substitute-header">
                    <h4 class="substitute-name">${substitute.name}</h4>
                    <span class="availability-badge ${substitute.available ? 'available' : 'busy'}">
                        ${substitute.available ? '가용' : '배정중'}
                    </span>
                </div>
                <p class="substitute-subjects"><strong>담당과목:</strong> ${substitute.subjects.join(', ')}</p>
                ${assignment ? `<p class="current-assignment"><strong>현재배정:</strong> ${assignment.name} 교사 대체</p>` : ''}
            </div>
        `;
    });
    
    substitutesGrid.innerHTML = html;
}

// Absence Modal Functions
function openAbsenceModal(teacherId = null) {
    const modal = document.getElementById('absence-modal');
    if (!modal) return;
    
    const form = document.getElementById('absence-form');
    const title = document.getElementById('absence-modal-title');
    
    if (form) form.reset();
    if (title) title.textContent = '휴직 신청';
    
    if (teacherId) {
        const teacher = appData.teachers.find(t => t.id === teacherId);
        if (teacher) {
            document.getElementById('absence-teacher').value = teacher.name;
        }
    }
    
    modal.classList.remove('hidden');
}

function closeAbsenceModal() {
    const modal = document.getElementById('absence-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
    editingAbsenceId = null;
}

function handleAbsenceSubmit(event) {
    event.preventDefault();
    
    const teacherName = document.getElementById('absence-teacher').value;
    const absenceType = document.getElementById('absence-type').value;
    const startDate = document.getElementById('absence-start').value;
    const endDate = document.getElementById('absence-end').value;
    const substituteTeacher = document.getElementById('absence-substitute').value;
    const reason = document.getElementById('absence-reason').value;
    const status = document.getElementById('absence-status').value;
    
    if (!teacherName || !absenceType || !startDate || !reason) {
        showMessage('필수 항목을 모두 입력해주세요.', 'error');
        return;
    }
    
    const teacher = appData.teachers.find(t => t.name === teacherName);
    if (!teacher) {
        showMessage('해당 교사를 찾을 수 없습니다.', 'error');
        return;
    }
    
    const absenceData = {
        id: `A${String(absenceIdCounter++).padStart(3, '0')}`,
        teacher_id: teacher.id,
        teacher_name: teacherName,
        absence_type: absenceType,
        start_date: startDate,
        end_date: endDate,
        substitute_teacher_name: substituteTeacher,
        status: status,
        reason: reason,
        approval_date: status === '승인' ? new Date().toISOString().split('T')[0] : null
    };
    
    if (editingAbsenceId) {
        // Update existing absence
        const index = appData.absences.findIndex(a => a.id === editingAbsenceId);
        if (index !== -1) {
            appData.absences[index] = { ...appData.absences[index], ...absenceData, id: editingAbsenceId };
        }
        showMessage('휴직 정보가 수정되었습니다.', 'success');
    } else {
        // Add new absence
        appData.absences.push(absenceData);
        
        // Update teacher status
        teacher.status = status === '승인' ? '휴직중' : '정상근무';
        
        // Update substitute teacher availability
        if (substituteTeacher && status === '승인') {
            const substitute = appData.substitute_teachers.find(s => s.name === substituteTeacher);
            if (substitute) {
                substitute.available = false;
                substitute.current_assignment = teacher.id;
            }
        }
        
        showMessage('휴직 신청이 추가되었습니다.', 'success');
    }
    
    closeAbsenceModal();
    renderAbsenceStats();
    renderAbsenceView(currentAbsenceView);
}

function editAbsence(absenceId) {
    const absence = appData.absences.find(a => a.id === absenceId);
    if (!absence) {
        showMessage('해당 휴직 정보를 찾을 수 없습니다.', 'error');
        return;
    }
    
    editingAbsenceId = absenceId;
    
    document.getElementById('absence-teacher').value = absence.teacher_name;
    document.getElementById('absence-type').value = absence.absence_type;
    document.getElementById('absence-start').value = absence.start_date;
    document.getElementById('absence-end').value = absence.end_date || '';
    document.getElementById('absence-substitute').value = absence.substitute_teacher_name || '';
    document.getElementById('absence-reason').value = absence.reason;
    document.getElementById('absence-status').value = absence.status;
    
    document.getElementById('absence-modal-title').textContent = '휴직 정보 수정';
    document.getElementById('absence-modal').classList.remove('hidden');
}

function deleteAbsence(absenceId) {
    showConfirmDialog(
        '휴직 정보 삭제',
        '정말로 이 휴직 정보를 삭제하시겠습니까?',
        () => {
            const absence = appData.absences.find(a => a.id === absenceId);
            if (absence) {
                // Update teacher status
                const teacher = appData.teachers.find(t => t.id === absence.teacher_id);
                if (teacher) {
                    teacher.status = '정상근무';
                }
                
                // Update substitute teacher availability
                if (absence.substitute_teacher_name) {
                    const substitute = appData.substitute_teachers.find(s => s.name === absence.substitute_teacher_name);
                    if (substitute) {
                        substitute.available = true;
                        substitute.current_assignment = null;
                    }
                }
                
                // Remove absence
                appData.absences = appData.absences.filter(a => a.id !== absenceId);
                
                showMessage('휴직 정보가 삭제되었습니다.', 'success');
                renderAbsenceStats();
                renderAbsenceView(currentAbsenceView);
            }
        }
    );
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Application initializing...');
    
    initializeCustomTasks();
    initializeTaskStates();
    renderTasks(currentMonth);
    updateProgress();
    
    // Initialize absence management if needed
    if (currentActiveTab === 'absence-management') {
        renderAbsenceStats();
        renderAbsenceView(currentAbsenceView);
    }
    
    console.log('Application initialized successfully');
});