import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from './user.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should intiialize user variable", () => {
    const userComp = fixture.debugElement.componentInstance;
    const userService = fixture.debugElement.injector.get(UserService);
    expect(userComp.user.name).toBe(userService.user.name);
  })

  it("should ask for login in", () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("p").textContent).toContain("Please Login in.");
  })

  it("should login in", ()=>{
   const compiled = fixture.debugElement.nativeElement;
   const comp = fixture.debugElement.componentInstance;
   comp.loggedIn = true;
   fixture.detectChanges();
   expect(compiled.querySelector("p").textContent).toContain("Foo");
  })
});
