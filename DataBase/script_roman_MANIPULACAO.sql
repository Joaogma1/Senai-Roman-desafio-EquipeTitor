use senai_roman_tarde

INSERT INTO CARGOS(NOME)
VALUES ('ADMINISTRADOR'),
	   ('PROFESSOR')


INSERT INTO EQUIPES(NOME)
VALUES('Desenvolvimento'),
	  ('Redes'),
	  ('Multimídia')

INSERT INTO USUARIOS (ID_CARGO, ID_EQUIPE, NOME, EMAIL, SENHA)
VALUES (1, 1, 'Admin', 'admin@admin.com', 'admin'),
	   (2, 1, 'Bruno', 'bruno@email.com', '12345'),
	   (2, 1, 'Gabriel', 'gabriel@email.com', '12345'),
	   (2, 1, 'João', 'joao@email.com', '12345')

INSERT INTO TEMAS (NOME)
VALUES ('Filmes'),
	   ('Hqs'),
	   ('Séries')

INSERT INTO PROJETOS (ID_AUTOR, ID_TEMA, NOME)
VALUES (4, 3, 'Projeto 1'),
	   (3, 2, 'Projeto 2'),
	   (2, 1, 'Projeto 3')