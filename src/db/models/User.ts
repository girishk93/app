import { Model } from '@nozbe/watermelondb'
import { field, date } from '@nozbe/watermelondb/decorators'

export default class User extends Model {
    static table = 'users'

    @field('email') declare email: string
    @field('current_streak') declare currentStreak: number
    @field('total_focus_minutes') declare totalFocusMinutes: number
    @date('last_review_date') declare lastReviewDate: number
    @field('settings_json') declare settingsJson: string
}
