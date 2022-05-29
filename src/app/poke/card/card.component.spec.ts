import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule} from '@angular/common/http/testing'

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokeService } from 'src/app/service/poke.service';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  let service: PokeService
1
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ],
      imports:[HttpClientTestingModule],
      providers: [PokeService]
    })
    .compileComponents();
 
    service = TestBed.inject(PokeService)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
