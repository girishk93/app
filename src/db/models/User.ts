import { Model } from '@nozbe/watermelondb'
import { field, date } from '@nozbe/watermelondb/decorators'

export default class User extends Model {
    static table = 'users'

    @field('email') email!: string
    @field('current_streak') currentStreak!: number
    @field('total_focus_minutes') totalFocusMinutes!: number
    @date('last_review_date') lastReviewDate!: number
    @field('settings_json') settingsJson!: string
}
