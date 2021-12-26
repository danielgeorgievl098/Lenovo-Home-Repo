"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class StateEx {
    listeners = [];
    addListener(listenerFn) {
        this.listeners.push(listenerFn);
    }
}
class State extends StateEx {
    projects = [];
    static instance;
    constructor() {
        super();
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new State();
            return this.instance;
        }
    }
    addProject(title, description, numberOfPeople) {
        const newProject = new Project(Math.random().toString(), title, description, numberOfPeople, ProjectStatus.Active);
        this.projects.push(newProject);
        this.updateListeners();
    }
    moveProject(projectId, newStatus) {
        const project = this.projects.find((project) => project.id === projectId);
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }
    }
    updateListeners() {
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}
const newState = State.getInstance();
// BASE CLASS
class Component {
    templateEl;
    hostEl;
    element;
    constructor(templateId, hostElId, insertStart, newElId) {
        this.templateEl = (document.querySelector(`#${templateId}`));
        this.hostEl = document.querySelector(`#${hostElId}`);
        const importedNode = document.importNode(this.templateEl.content, true);
        this.element = importedNode.firstElementChild;
        if (newElId) {
            this.element.id = newElId;
        }
        this.attach(insertStart);
    }
    attach(insertStart) {
        this.hostEl.insertAdjacentElement(insertStart ? 'afterbegin' : 'beforeend', this.element);
    }
}
///PROJECT TYPE CLASS
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
})(ProjectStatus || (ProjectStatus = {}));
class Project {
    id;
    title;
    description;
    people;
    status;
    constructor(id, title, description, people, status) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.people = people;
        this.status = status;
    }
}
function validate(validatableInput) {
    let isValid = true;
    if (validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (validatableInput.minLenght != null &&
        typeof validatableInput.value === 'string') {
        isValid =
            isValid && validatableInput.value.length > validatableInput.minLenght;
    }
    if (validatableInput.maxLenght != null &&
        typeof validatableInput.value === 'string') {
        isValid =
            isValid && validatableInput.value.length < validatableInput.maxLenght;
    }
    if (validatableInput.min != null &&
        typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value > validatableInput.min;
    }
    if (validatableInput.max != null &&
        typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value < validatableInput.max;
    }
    return isValid;
}
//autobind decorator
function AutoBind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjustedDescriptor = {
        configurable: true,
        get() {
            const boundF = originalMethod.bind(this);
            return boundF;
        },
    };
    return adjustedDescriptor;
}
// PROJECT ITEM
class ProjectItem extends Component {
    project;
    get persons() {
        if (this.project.people === 1) {
            return '1 Person';
        }
        else {
            return `${this.project.people} persons`;
        }
    }
    constructor(hostId, project) {
        super('single-project', hostId, false, project.id);
        this.project = project;
        this.configure();
        this.renderContent();
    }
    dragStartHandler(event) {
        event.dataTransfer.setData('text/plain', this.project.id);
        event.dataTransfer.effectAllowed = 'move';
    }
    dragEndHandler(_) {
        console.log('END');
    }
    configure() {
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    }
    renderContent() {
        this.element.querySelector('h2').textContent = this.project.title;
        this.element.querySelector('h3').textContent = this.persons + ' assigned.';
        this.element.querySelector('p').textContent = this.project.description;
    }
}
__decorate([
    AutoBind
], ProjectItem.prototype, "dragStartHandler", null);
//RENDERING PROJECT LISTS
class ProjectList extends Component {
    type;
    assignedProjects;
    constructor(type) {
        super(`project-list`, 'app', false, `${type}-projects`);
        this.type = type;
        this.assignedProjects = [];
        this.configure();
        this.renderContent();
    }
    dragOverHandler(event) {
        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
            event.preventDefault();
            const listEl = this.element.querySelector('ul');
            listEl.classList.add('droppable');
        }
    }
    dropHandler(event) {
        const projectId = event.dataTransfer.getData('text/plain');
        newState.moveProject(projectId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished);
    }
    dragLeaveHandler(event) {
        const listEl = this.element.querySelector('ul');
        listEl.classList.remove('droppable');
    }
    configure() {
        this.element.addEventListener('dragover', this.dragOverHandler);
        this.element.addEventListener('dragleave', this.dragLeaveHandler);
        this.element.addEventListener('drop', this.dropHandler);
        newState.addListener((projects) => {
            const relaventProjects = projects.filter((project) => {
                if (this.type === 'active') {
                    return project.status === ProjectStatus.Active;
                }
                return project.status === ProjectStatus.Finished;
            });
            this.assignedProjects = relaventProjects;
            this.renderProjects();
        });
    }
    renderContent() {
        const listId = `${this.type}-projects-list`;
        this.element.querySelector('ul').id = listId;
        this.element.querySelector('h2').textContent =
            this.type.toLocaleUpperCase() + ' PROJECTS';
    }
    renderProjects() {
        const listEl = document.querySelector(`#${this.type}-projects-list`);
        listEl.innerHTML = '';
        for (const projectsItem of this.assignedProjects) {
            new ProjectItem(this.element.querySelector('ul').id, projectsItem);
        }
    }
}
__decorate([
    AutoBind
], ProjectList.prototype, "dragOverHandler", null);
__decorate([
    AutoBind
], ProjectList.prototype, "dropHandler", null);
__decorate([
    AutoBind
], ProjectList.prototype, "dragLeaveHandler", null);
///RENDER INPUT
class Input extends Component {
    titleInputEl;
    descriptionInputEl;
    peopleInputEl;
    constructor() {
        super(`project-input`, `app`, true, `user-input`);
        this.titleInputEl = this.element.querySelector('#title');
        this.descriptionInputEl = (this.element.querySelector('#description'));
        this.peopleInputEl = (this.element.querySelector('#people'));
        this.configure();
    }
    submitHandler(e) {
        e.preventDefault();
        const userInput = this.userInp();
        if (Array.isArray(userInput)) {
            const [title, description, people] = userInput;
            console.log(title, description, people);
            newState.addProject(title, description, people);
            this.clearInputs();
        }
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }
    renderContent() { }
    userInp() {
        const enteredTitle = this.titleInputEl.value;
        const enteredDescription = this.descriptionInputEl.value;
        const enteredProple = this.peopleInputEl.value;
        const titleValidatable = {
            value: enteredTitle,
            required: true,
        };
        const descriptionValidatable = {
            value: enteredDescription,
            required: true,
            minLenght: 5,
        };
        const peopleValidatable = {
            value: +enteredProple,
            required: true,
            min: 0,
            max: 5,
        };
        if (!validate(titleValidatable) ||
            !validate(descriptionValidatable) ||
            !validate(peopleValidatable)) {
            alert('Invalid Input, please try again');
            return;
        }
        else {
            return [enteredTitle, enteredDescription, +enteredProple];
        }
    }
    clearInputs() {
        this.titleInputEl.value = '';
        this.peopleInputEl.value = '';
        this.descriptionInputEl.value = '';
    }
}
__decorate([
    AutoBind
], Input.prototype, "submitHandler", null);
const prjInput = new Input();
const activeProjectList = new ProjectList('active');
const finishedProjectList = new ProjectList('finished');
