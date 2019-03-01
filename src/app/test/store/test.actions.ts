export class Save {
  static readonly type = '[Test] Save';
  constructor() { }
}

export class Update {
  static readonly type = '[Test] Update';
  constructor() { }
}

export class SetTestId {
  static readonly type = '[Test] SetTestId';
  constructor(public id: string) { }
}
