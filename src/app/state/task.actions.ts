// Defines the actions available to the app
export const actions = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PIN_TASK: 'PIN_TASK',
  ERROR: 'APP_ERROR',
};

export class ArchiveTask {
  static readonly type = actions.ARCHIVE_TASK;

  constructor(public payload: string) {}
}

export class PinTask {
  static readonly type = actions.PIN_TASK;

  constructor(public payload: string) {}
}

// The class definition for our error field
export class AppError {
  static readonly type = actions.ERROR;
  constructor(public payload: boolean) {}
}
