import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokeService } from 'src/app/service/poke.service';

import { GridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;

  let service: PokeService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridComponent ],
      imports:[HttpClientTestingModule],
      providers:[PokeService]
    })
    .compileComponents();
  
    service = TestBed.inject(PokeService)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
