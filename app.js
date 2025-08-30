// 데이터 초기화
let currentMonth = 1;
let editingTask = null;

// 월별 업무 데이터 - 초기 빈 객체
let monthlyTasks = {};

// 모든 월 데이터 초기화 함수 (핵심 기능)
function initializeAllMonths() {
    console.log('Initializing all months with core tasks...');
    
    for (let i = 1; i <= 12; i++) {
        if (!monthlyTasks[i]) {
            monthlyTasks[i] = {
                month_name: `${i}월`,
                regular_tasks: [],
                preparation_tasks: [],
                special_tasks: [],
                custom_tasks: []
            };
        }
        
        // 주간업무일지 추가 (모든 월)
        const existingWeekly = monthlyTasks[i].regular_tasks.find(t => t.name === '주간업무일지');
        if (!existingWeekly) {
            monthlyTasks[i].regular_tasks.push({
                name: '주간업무일지',
                type: '정기업무',
                description: '매주 작성하는 업무 보고서',
                weeks: 4,
                id: `task_${i}_weekly`,
                editable: true,
                completed_weeks: 0
            });
        }
        
        // 기간제교원 계약 업무 추가 (모든 월) - 핵심 요구사항
        const existingContract = monthlyTasks[i].regular_tasks.find(t => t.name === '기간제교원 계약');
        if (!existingContract) {
            monthlyTasks[i].regular_tasks.push({
                name: '기간제교원 계약',
                type: '프로젝트업무',
                description: '필요시 진행하는 기간제교원 채용 업무',
                steps: [
                    '공고번호 채번',
                    '공고 내부결재',
                    '교육청 게시판 공고',
                    '채용 계약 완료',
                    '계약 후 문서 수합 및 내부결재',
                    '성범죄조회 문서 출력 합본',
                    '교감선생님 제출'
                ],
                id: `task_${i}_contract`,
                editable: true,
                completed_steps: []
            });
        }
        
        // 시간강사 수당 지급 추가 (모든 월)
        const existingPayment = monthlyTasks[i].regular_tasks.find(t => t.name === '시간강사 수당 지급');
        if (!existingPayment) {
            monthlyTasks[i].regular_tasks.push({
                name: '시간강사 수당 지급',
                type: '정기업무',
                description: '매월 말 시간강사 수당 처리',
                weeks: 1,
                id: `task_${i}_payment`,
                editable: true,
                completed_weeks: 0
            });
        }
    }
    
    console.log('All months initialized with core tasks');
}

// 월별 탭 전환
function switchMonth(month) {
    console.log('Switching to month:', month);
    currentMonth = month;
    
    // 월별 탭 업데이트
    document.querySelectorAll('.month-tab').forEach(tab => tab.classList.remove('active'));
    const monthTabs = document.querySelectorAll('.month-tab');
    if (monthTabs[month - 1]) {
        monthTabs[month - 1].classList.add('active');
    }
    
    // 월별 제목 업데이트
    const monthlyTitle = document.getElementById('monthly-title');
    if (monthlyTitle) monthlyTitle.textContent = `${month}월 진척률`;
    
    renderTasks(month);
    updateProgress();
}

// 업무 렌더링
function renderTasks(month) {
    console.log('Rendering tasks for month:', month);
    
    const monthData = monthlyTasks[month.toString()];
    const taskContent = document.getElementById('task-content');
    
    if (!taskContent) {
        console.error('Task content element not found');
        return;
    }
    
    if (!monthData) {
        console.log('No data for month:', month);
        taskContent.innerHTML = '<div class="empty-state">이 달에는 등록된 업무가 없습니다.</div>';
        return;
    }
    
    let html = '';
    
    // 정기업무 렌더링
    if (monthData.regular_tasks && monthData.regular_tasks.length > 0) {
        html += '<div class="task-section"><h4>정기업무</h4>';
        monthData.regular_tasks.forEach(task => {
            html += renderTaskCard(task, 'regular_tasks');
        });
        html += '</div>';
    }
    
    // 특별업무 렌더링
    if (monthData.special_tasks && monthData.special_tasks.length > 0) {
        html += '<div class="task-section"><h4>특별업무</h4>';
        monthData.special_tasks.forEach(task => {
            html += renderTaskCard(task, 'special_tasks');
        });
        html += '</div>';
    }
    
    // 준비업무 렌더링
    if (monthData.preparation_tasks && monthData.preparation_tasks.length > 0) {
        html += '<div class="task-section"><h4>준비업무</h4>';
        monthData.preparation_tasks.forEach(task => {
            html += renderTaskCard(task, 'preparation_tasks');
        });
        html += '</div>';
    }
    
    // 커스텀업무 렌더링
    if (monthData.custom_tasks && monthData.custom_tasks.length > 0) {
        html += '<div class="task-section"><h4>추가업무</h4>';
        monthData.custom_tasks.forEach(task => {
            html += renderTaskCard(task, 'custom_tasks');
        });
        html += '</div>';
    }
    
    if (html === '') {
        html = '<div class="empty-state">이 달에는 등록된 업무가 없습니다.</div>';
    }
    
    taskContent.innerHTML = html;
    console.log('Tasks rendered successfully');
}

// 업무 카드 렌더링
function renderTaskCard(task, taskType) {
    const isCompleted = isTaskCompleted(task);
    const completedClass = isCompleted ? 'completed' : '';
    
    let progressContent = '';
    
    if (task.type === '정기업무' && task.weeks) {
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
    } else if (task.type === '프로젝트업무' && task.steps) {
        const completedSteps = task.completed_steps || [];
        const progressPercent = (completedSteps.length / task.steps.length) * 100;
        
        progressContent = `
            <div class="task-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progressPercent}%"></div>
                </div>
                <div class="task-steps">
                    <h5>작업 단계 (${completedSteps.length}/${task.steps.length}):</h5>
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
    }
    
    return `
        <div class="task-card ${completedClass}">
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
                    <button class="task-action-btn" onclick="openTaskModal('${task.id}')">✏️ 편집</button>
                    <button class="task-action-btn" onclick="duplicateTask('${task.id}')">📋 복제</button>
                    <button class="task-action-btn" onclick="deleteTask('${task.id}')">🗑️ 삭제</button>
                </div>
            ` : ''}
        </div>
    `;
}

// 업무 완료 여부 확인
function isTaskCompleted(task) {
    if (task.type === '정기업무' && task.weeks) {
        return (task.completed_weeks || 0) >= task.weeks;
    } else if (task.type === '프로젝트업무' && task.steps) {
        const completedSteps = task.completed_steps || [];
        return completedSteps.length >= task.steps.length;
    }
    return false;
}

// 업무 완료 상태 토글
function toggleTaskCompletion(taskId, type, index) {
    console.log('Toggling completion for:', taskId, type, index);
    
    const task = findTaskById(taskId);
    if (!task) {
        console.error('Task not found:', taskId);
        return;
    }
    
    if (type === 'week') {
        const checkbox = document.querySelector(`input[data-task="${taskId}"][data-week="${index}"]`);
        if (!checkbox) {
            console.error('Week checkbox not found');
            return;
        }
        
        if (!task.completed_weeks) task.completed_weeks = 0;
        
        if (checkbox.checked) {
            task.completed_weeks = Math.max(task.completed_weeks, index + 1);
            // 이전 주차들도 자동으로 체크
            for (let i = 0; i <= index; i++) {
                const prevCheckbox = document.querySelector(`input[data-task="${taskId}"][data-week="${i}"]`);
                if (prevCheckbox) prevCheckbox.checked = true;
            }
        } else {
            task.completed_weeks = index;
            // 이후 주차들도 자동으로 해제
            for (let i = index; i < task.weeks; i++) {
                const laterCheckbox = document.querySelector(`input[data-task="${taskId}"][data-week="${i}"]`);
                if (laterCheckbox) laterCheckbox.checked = false;
            }
        }
        
    } else if (type === 'step') {
        if (!task.completed_steps) task.completed_steps = [];
        
        const stepIndex = task.completed_steps.indexOf(index);
        if (stepIndex === -1) {
            task.completed_steps.push(index);
        } else {
            task.completed_steps.splice(stepIndex, 1);
        }
    }
    
    // UI 업데이트
    setTimeout(() => {
        renderTasks(currentMonth);
        updateProgress();
    }, 100);
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
        
        for (let taskArray of allTaskArrays) {
            const task = taskArray.find(t => t.id === taskId);
            if (task) return task;
        }
    }
    return null;
}

// 업무 유형 변경 시 폼 업데이트
function onTaskTypeChange() {
    const taskType = document.getElementById('task-type').value;
    const weeksGroup = document.getElementById('weeks-group');
    const stepsGroup = document.getElementById('steps-group');
    
    if (taskType === '정기업무') {
        if (weeksGroup) weeksGroup.style.display = 'block';
        if (stepsGroup) stepsGroup.style.display = 'none';
    } else if (taskType === '프로젝트업무') {
        if (weeksGroup) weeksGroup.style.display = 'none';
        if (stepsGroup) stepsGroup.style.display = 'block';
    }
}

// 단계 추가
function addStep() {
    const stepsContainer = document.getElementById('steps-container');
    if (!stepsContainer) return;
    
    const stepIndex = stepsContainer.children.length;
    const stepDiv = document.createElement('div');
    stepDiv.className = 'step-input-group';
    stepDiv.innerHTML = `
        <input type="text" class="form-control step-input" placeholder="단계 ${stepIndex + 1}" required>
        <button type="button" class="btn btn--outline btn--sm" onclick="removeStep(this)">×</button>
    `;
    stepsContainer.appendChild(stepDiv);
}

// 단계 제거
function removeStep(button) {
    const stepDiv = button.parentElement;
    stepDiv.remove();
    
    // 단계 번호 재정렬
    const stepsContainer = document.getElementById('steps-container');
    if (stepsContainer) {
        const stepInputs = stepsContainer.querySelectorAll('.step-input');
        stepInputs.forEach((input, index) => {
            input.placeholder = `단계 ${index + 1}`;
        });
    }
}

// 업무 추가 모달 열기
function openTaskModal(taskId = null) {
    console.log('Opening task modal:', taskId);
    
    editingTask = taskId;
    const modal = document.getElementById('task-modal');
    const title = document.getElementById('task-modal-title');
    const monthSelectionGroup = document.getElementById('month-selection-group');
    
    if (!modal || !title) {
        console.error('Modal elements not found');
        return;
    }
    
    if (taskId) {
        title.textContent = '업무 편집';
        if (monthSelectionGroup) monthSelectionGroup.style.display = 'none';
        
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
                onTaskTypeChange(); // 폼 업데이트
            }
            if (descriptionInput) descriptionInput.value = task.description || '';
            if (weeksInput) weeksInput.value = task.weeks || 1;
            
            // 프로젝트업무 단계 로드
            if (task.type === '프로젝트업무' && task.steps) {
                const stepsContainer = document.getElementById('steps-container');
                if (stepsContainer) {
                    stepsContainer.innerHTML = '';
                    task.steps.forEach(step => {
                        const stepDiv = document.createElement('div');
                        stepDiv.className = 'step-input-group';
                        stepDiv.innerHTML = `
                            <input type="text" class="form-control step-input" value="${step}" required>
                            <button type="button" class="btn btn--outline btn--sm" onclick="removeStep(this)">×</button>
                        `;
                        stepsContainer.appendChild(stepDiv);
                    });
                }
            }
        }
    } else {
        title.textContent = '업무 추가';
        if (monthSelectionGroup) monthSelectionGroup.style.display = 'block';
        
        const form = document.getElementById('task-form');
        if (form) form.reset();
        
        // 초기 단계 설정
        const stepsContainer = document.getElementById('steps-container');
        if (stepsContainer) stepsContainer.innerHTML = '';
        
        onTaskTypeChange(); // 초기 폼 상태 설정
        
        // 현재 월을 기본 선택으로 설정
        setTimeout(() => {
            const currentMonthCheckbox = document.querySelector(`input[name="selected-months"][value="${currentMonth}"]`);
            if (currentMonthCheckbox) currentMonthCheckbox.checked = true;
        }, 100);
    }
    
    modal.classList.remove('hidden');
}

// 업무 추가 모달 닫기
function closeTaskModal() {
    const modal = document.getElementById('task-modal');
    if (modal) {
        modal.classList.add('hidden');
    }
    editingTask = null;
    
    const form = document.getElementById('task-form');
    if (form) form.reset();
    
    const stepsContainer = document.getElementById('steps-container');
    if (stepsContainer) stepsContainer.innerHTML = '';
}

// 업무 저장
function saveTask() {
    console.log('Saving task...');
    
    const nameInput = document.getElementById('task-name');
    const typeInput = document.getElementById('task-type');
    const descriptionInput = document.getElementById('task-description');
    const weeksInput = document.getElementById('task-weeks');
    
    if (!nameInput || !typeInput) {
        console.error('Required form elements not found');
        return;
    }
    
    const name = nameInput.value.trim();
    const type = typeInput.value;
    const description = descriptionInput ? descriptionInput.value.trim() : '';
    const weeks = weeksInput ? parseInt(weeksInput.value) : 1;
    
    if (!name) {
        alert('업무명을 입력해주세요.');
        return;
    }
    
    // 프로젝트업무의 경우 단계 수집
    let steps = [];
    if (type === '프로젝트업무') {
        const stepInputs = document.querySelectorAll('.step-input');
        steps = Array.from(stepInputs).map(input => input.value.trim()).filter(step => step);
        
        if (steps.length === 0) {
            alert('프로젝트업무는 최소 1개 이상의 단계가 필요합니다.');
            return;
        }
    }
    
    if (editingTask) {
        // 기존 업무 편집
        const task = findTaskById(editingTask);
        if (task) {
            task.name = name;
            task.type = type;
            task.description = description;
            
            if (type === '정기업무') {
                task.weeks = weeks;
                delete task.steps;
                if (!task.completed_weeks) task.completed_weeks = 0;
            } else if (type === '프로젝트업무') {
                task.steps = steps;
                delete task.weeks;
                if (!task.completed_steps) task.completed_steps = [];
            }
            
            console.log('Task updated:', task);
            
            closeTaskModal();
            renderTasks(currentMonth);
            updateProgress();
            
            alert('업무가 수정되었습니다.');
        }
    } else {
        // 새 업무 추가
        const selectedMonthCheckboxes = document.querySelectorAll('input[name="selected-months"]:checked');
        
        if (selectedMonthCheckboxes.length === 0) {
            alert('적용할 월을 하나 이상 선택해주세요.');
            return;
        }
        
        const selectedMonths = Array.from(selectedMonthCheckboxes).map(cb => parseInt(cb.value));
        
        selectedMonths.forEach(month => {
            if (!monthlyTasks[month.toString()]) {
                monthlyTasks[month.toString()] = {
                    month_name: `${month}월`,
                    regular_tasks: [],
                    special_tasks: [],
                    preparation_tasks: [],
                    custom_tasks: []
                };
            }
            
            if (!monthlyTasks[month.toString()].custom_tasks) {
                monthlyTasks[month.toString()].custom_tasks = [];
            }
            
            const taskData = {
                id: `custom_${month}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                name: name,
                type: type,
                description: description,
                editable: true
            };
            
            if (type === '정기업무') {
                taskData.weeks = weeks;
                taskData.completed_weeks = 0;
            } else if (type === '프로젝트업무') {
                taskData.steps = steps;
                taskData.completed_steps = [];
            }
            
            monthlyTasks[month.toString()].custom_tasks.push(taskData);
        });
        
        closeTaskModal();
        renderTasks(currentMonth);
        updateProgress();
        
        alert(`업무가 ${selectedMonths.length}개월(${selectedMonths.join(', ')}월)에 추가되었습니다.`);
    }
}

// 업무 삭제
function deleteTask(taskId) {
    console.log('Deleting task:', taskId);
    
    if (!confirm('정말로 이 업무를 삭제하시겠습니까?')) {
        return;
    }
    
    let taskDeleted = false;
    let taskName = '';
    
    for (let month in monthlyTasks) {
        const monthData = monthlyTasks[month];
        const taskArrays = ['regular_tasks', 'special_tasks', 'preparation_tasks', 'custom_tasks'];
        
        for (let arrayName of taskArrays) {
            if (monthData[arrayName]) {
                const taskIndex = monthData[arrayName].findIndex(t => t.id === taskId && t.editable);
                if (taskIndex !== -1) {
                    taskName = monthData[arrayName][taskIndex].name;
                    monthData[arrayName].splice(taskIndex, 1);
                    taskDeleted = true;
                    break;
                }
            }
        }
        if (taskDeleted) break;
    }
    
    if (taskDeleted) {
        renderTasks(currentMonth);
        updateProgress();
        alert(`업무 "${taskName}"가 삭제되었습니다.`);
    } else {
        alert('삭제할 업무를 찾을 수 없습니다.');
    }
}

// 업무 복제
function duplicateTask(taskId) {
    const task = findTaskById(taskId);
    if (!task) {
        alert('복제할 업무를 찾을 수 없습니다.');
        return;
    }
    
    const newTask = {
        ...task,
        id: `custom_${currentMonth}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        name: `${task.name} (복사본)`,
        completed_weeks: 0,
        completed_steps: []
    };
    
    if (!monthlyTasks[currentMonth.toString()].custom_tasks) {
        monthlyTasks[currentMonth.toString()].custom_tasks = [];
    }
    monthlyTasks[currentMonth.toString()].custom_tasks.push(newTask);
    
    renderTasks(currentMonth);
    updateProgress();
    
    alert(`업무 "${task.name}"가 현재 월(${currentMonth}월)에 복제되었습니다.`);
}

// 진척률 업데이트
function updateProgress() {
    updateMonthlyProgress();
    updateAnnualProgress();
}

// 월별 진척률 업데이트
function updateMonthlyProgress() {
    const monthData = monthlyTasks[currentMonth.toString()];
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

// 페이지 로드 시 초기화 - 핵심 함수 호출
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // 모든 월에 기간제교원 계약 업무 자동 생성 (핵심 요구사항)
    initializeAllMonths();
    
    // 업무 유형 변경 이벤트 리스너
    const taskTypeSelect = document.getElementById('task-type');
    if (taskTypeSelect) {
        taskTypeSelect.addEventListener('change', onTaskTypeChange);
    }
    
    // 폼 제출 이벤트 리스너 추가
    const taskForm = document.getElementById('task-form');
    if (taskForm) {
        taskForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveTask();
        });
    }
    
    // 초기 설정
    currentMonth = 1;
    renderTasks(1);
    updateProgress();
    
    console.log('Initialization complete - All months have contract tasks');
});

// 모달 외부 클릭 시 닫기
window.addEventListener('click', function(event) {
    const taskModal = document.getElementById('task-modal');
    if (event.target === taskModal) {
        closeTaskModal();
    }
});