import type { IGraphQLQuerySchema } from '#utils/requestGraphql'
import type { IServiceDataReturnType } from '../../types/response'
import { NgTemplateOutlet } from '@angular/common'
import { Component, inject, OnInit, PendingTasks, signal, type WritableSignal } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslatePipe } from '@ngx-translate/core'
import { NzButtonComponent } from 'ng-zorro-antd/button'
import { NzMessageService } from 'ng-zorro-antd/message'
import { InfluencePipe } from './influence-pipe'
import { MilitaryGeneralsService } from './military-generals.service'

@Component({
  selector: 'app-military-generals',
  providers: [
    NzMessageService,
    MilitaryGeneralsService,
  ],
  imports: [
    NgTemplateOutlet,
    RouterLink,
    TranslatePipe,
    NzButtonComponent,
    InfluencePipe,
  ],
  templateUrl: './military-generals.html',
  styleUrl: './military-generals.sass',
})
export class MilitaryGenerals implements OnInit {
  pendingTasks: PendingTasks = inject(PendingTasks)
  message: NzMessageService = inject(NzMessageService)
  militaryGeneralsService: MilitaryGeneralsService = inject(MilitaryGeneralsService)

  militaryGeneralsList: WritableSignal<IGraphQLQuerySchema['militaryGenerals']['list']> = signal([])

  async getMilitaryGenerals(): Promise<void> {
    const res: IServiceDataReturnType<IGraphQLQuerySchema['militaryGenerals']['list']> = await this.militaryGeneralsService.getMilitaryGenerals()

    if (res.errorMessage) {
      this.message.error(res.errorMessage)

      return
    }

    this.militaryGeneralsList.set(res.data)
  }

  ngOnInit(): void {
    this.pendingTasks.run((): Promise<void> => this.getMilitaryGenerals())
  }
}
