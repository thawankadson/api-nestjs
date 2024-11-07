import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('developers')
export class Developer {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  dateOfBirth: string;

  @BeforeInsert()
  async generateId() {
    const { nanoid } = await import('nanoid').then(module => module.default || module);
    this.id = `dev_${nanoid()}`;
  }
}