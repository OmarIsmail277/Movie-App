import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowsCard } from './tv-shows-card';

describe('TvShowsCard', () => {
  let component: TvShowsCard;
  let fixture: ComponentFixture<TvShowsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvShowsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvShowsCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
