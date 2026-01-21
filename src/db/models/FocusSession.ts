import { Model } from '@nozbe/watermelondb'
import { field, date, readonly } from '@nozbe/watermelondb/decorators'

export default class FocusSession extends Model {
    static table = 'focus_sessions'

    @field('user_id') userId: string
    @date('start_time') startTime: number
    @date('end_time') endTime: number
    @field('duration_minutes') durationMinutes: number
    @field('status') status: string
    @field('linked_task_id') linkedTaskId: string
    @field('synced') synced: boolean

    @readonly @date('created_at') createdAt: number
    @readonly @date('updated_at') updatedAt: number
}
