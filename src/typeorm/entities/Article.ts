import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'articles' })
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  articleName: string;

  @Column()
  authorName: string;

  @Column()
  createdAt: Date;

  @Column({ nullable: true })
  updatedAt: Date;
}
