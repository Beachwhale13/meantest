export class Poll {
  constructor(
    public question: string='',
    public option1: Object[] = [],
    public option2: Object[] = [],
    public option3: Object[] = [],
  ){}
}
