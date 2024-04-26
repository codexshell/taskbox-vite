import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InboxScreenPureComponent } from './inbox-screen-pure.component';

describe('InboxScreenPureComponent', () => {
  let component: InboxScreenPureComponent;
  let fixture: ComponentFixture<InboxScreenPureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InboxScreenPureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InboxScreenPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
