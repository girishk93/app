import { Model } from '@nozbe/watermelondb'
import { field, date } from '@nozbe/watermelondb/decorators'

export default class Task extends Model {
    static table = 'tasks'

    @field('user_id') userId!: string
    @field('title') title!: string
    @field('completed') completed!: boolean
    @field('linked_session_id') linkedSessionId!: string
    @date('due_date') dueDate!: number
}
