-- add users
INSERT INTO `blog_app`.`users` (`id`, `username`, `email`, `password`, `img`) VALUES ('1', 'Santiago', 'santiago@mail.com', '$2a$10$VqZJYEYnauC8qrVrVpWZX.E0u95i40pBmAEOc.Vs178nUJNyenzaa', 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80');
INSERT INTO `blog_app`.`users` (`id`, `username`, `email`, `password`, `img`) VALUES ('2', 'Pablo', 'pablo@mail.com', '$2a$10$VqZJYEYnauC8qrVrVpWZX.E0u95i40pBmAEOc.Vs178nUJNyenzaa', 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80');

-- insert posts
insert into `blog_app`.`posts` (`id`, `title`, `desc`, `img`, `uid`, `cat`, `date`) VALUES ('1', 'Balancing Passion and Profession: Finding Fulfillment at Work', 'Balancing passion with professional responsibilities is key to fulfillment. Pursuing work that aligns with personal interests and values leads to a more satisfying and rewarding career', 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80', '1', 'art', '2023-02-08');
insert into `blog_app`.`posts` (`id`, `title`, `desc`, `img`, `uid`, `cat`, `date`) VALUES ('2', 'Embracing Life's Journey: Lessons Learned Along the Way', 'Life's journey is filled with lessons from both triumphs and tribulations. Embracing change and learning from experiences fosters growth, adaptability, and joy in the journey itself.', 'https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80', '2', 'food', '2023-02-08');
insert into `blog_app`.`posts` (`id`, `title`, `desc`, `img`, `uid`, `cat`, `date`) VALUES ('3', 'Building Strong Family Bonds in a Busy World', 'Maintaining strong family bonds is crucial despite busy schedules. Prioritizing quality time through activities like family dinners and game nights helps strengthen relationships and create lasting memories.', 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1059&q=80', '2', 'art', '2023-02-08');
insert into `blog_app`.`posts` (`id`, `title`, `desc`, `img`, `uid`, `cat`, `date`) VALUES ('4', 'Finding Strength in Faith During Difficult Times', 'Faith can provide strength and comfort during life's challenges. Practices like prayer and meditation, along with community support, help individuals find resilience and hope in difficult times.', 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80', '1', 'food', '2023-02-08');