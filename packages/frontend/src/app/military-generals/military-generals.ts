import { Component, OnInit, signal, type WritableSignal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MilitaryGeneralsService } from './military-generals.service';
import { InfluencePipe } from './influence-pipe';
import type { IGraphQLQuerySchema } from '../../utils/request';
import type { IServiceDataReturnType } from '../../types/response';

@Component({
  selector: 'app-military-generals',
  providers: [
    NzMessageService,
    MilitaryGeneralsService
  ],
  imports: [
    NgTemplateOutlet,
    RouterLink,
    NzButtonComponent,
    InfluencePipe
  ],
  templateUrl: './military-generals.html',
  styleUrl: './military-generals.sass'
})
export class MilitaryGenerals implements OnInit {
  constructor(
    private message: NzMessageService,
    private militaryGeneralsService: MilitaryGeneralsService
  ) {}

  militaryGeneralsList: WritableSignal<IGraphQLQuerySchema['militaryGenerals']['list']> = signal([]);

  async getMilitaryGenerals(): Promise<void> {
    const res: IServiceDataReturnType<IGraphQLQuerySchema['militaryGenerals']['list']> = await this.militaryGeneralsService.getMilitaryGenerals();

    if (res.errorMessage) {
      this.message.error(res.errorMessage);

      return;
    }

    this.militaryGeneralsList.set(res.data);
  }

  ngOnInit(): void {
    this.getMilitaryGenerals();
  }
}