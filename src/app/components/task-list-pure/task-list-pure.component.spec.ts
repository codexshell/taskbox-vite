import { type ComponentFixture, TestBed } from "@angular/core/testing";

import { TaskListPureComponent } from "./task-list-pure.component";

describe("TaskListComponent", () => {
	let component: TaskListPureComponent;
	let fixture: ComponentFixture<TaskListPureComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [TaskListPureComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(TaskListPureComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
