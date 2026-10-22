import { isPlatformServer } from '@angular/common'
import { Component, inject, PendingTasks, PLATFORM_ID } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslatePipe } from '@ngx-translate/core'
import { NzButtonComponent } from 'ng-zorro-antd/button'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NumberCountingStore, type TNumberCountingStoreTypes } from './number-counting.store'

@Component({
  selector: 'app-number-counting',
  imports: [
    RouterLink,
    TranslatePipe,
    NzButtonComponent,
    NzInputModule,
  ],
  templateUrl: './number-counting.html',
  styleUrl: './number-counting.sass',
})
export class NumberCounting {
  numberCountingStore: TNumberCountingStoreTypes['Store'] = inject(NumberCountingStore)
  pendingTasks: PendingTasks = inject(PendingTasks)
  isSSR: boolean = isPlatformServer(inject<object>(PLATFORM_ID))

  constructor() {
    this.pendingTasks.run(async (): Promise<void> => {
      if (this.isSSR) {
        this.numberCountingStore.add()
        this.numberCountingStore.add()
        this.numberCountingStore.add()
      }
    })
  }
}
