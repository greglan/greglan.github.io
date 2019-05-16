---
layout: page
title:  "Formal logic"
permalink: "formal-logic.html"
summary: ""
---

\section{Logique du 1er ordre}
\subsection{Système formel}
\begin{itemize}
	\item	Enoncé bien formé. (p2)
	\item	Système déductif, axiomes, règles d'inférence. (p2)
	\item	Système formel: définition. (p2)
	\item	Propriétés de récursivités des énoncés bien formés et des axiomes. (p2)
	\item	Preuve, théorème. (p2)
	\item	Logique du 1er ordre. (p3)
	\item	Proposition, constante. (p3)
	\item	Terme, terme clos. (p3)
	\item	Variable libre, variable liée. (p6)
	\item	Enoncé clos, sentence. (p6)
\end{itemize}

\subsection{Théorie des modèles}
\begin{itemize}
	\item	Domaine, univers. (p6)
	\item	Signature. (p6)
	\item	Fonction d'interprétation. (p6)
	\item	Structure, modèle. (p6)
	\item	Conséquence. (p7)
\end{itemize}

\subsection{Normalisation, simplification}
\begin{itemize}
	\item	Substitution, règles d'instantiation universelle et existentielle. (p10)
	\item	Constante de Skolem. (p11)
	\item	Unification, unificateur. (p11)
	\item	Forme normale prénexe. Existence. (p11)
	\item	Forme normale conjonctive. Existence. (p12)
	\item	Forme normale prénexe conjonctive. Existence. (p12)
	\item	Forme normale de Skolem. Existence. (p12)
	\item	Satisfaisabilité et skolémisation. (p13)
	\item
\end{itemize}

\subsection{Résolution}
\begin{itemize}
	\item	Définition. (p13)
\end{itemize}


\section{Logiques de description}
\begin{itemize}
	\item	Individus, concepts, classes, rôles, propriétés. (p22)
	\item	ABox, TBox et RBox. (p22)
	\item	Assertion de concept, assertion de rôle. (p22)
	\item	Hyptohèse de l'unicité des noms. (p22)
	\item	Négation logique et complémentaire. (p23)
	\item	Ensemble complet, ensemble vide. (p23)
	\item	Restriction existentielle, universelle. (p23)
	\item	Restrictions au-plus, au moins. (p23)
	\item	Reflexivité. (p23)
	\item	Description extensionnelle. (p23)
	\item	Rôle inverse, rôle universel. (p23)
	\item	Clôture transitive. (p23)
	\item	Ontologie, ontologie DL. (p23)
\end{itemize}

\section{Sémantique et vérification des langages de programmation}
\begin{itemize}
	\item	Lien programme et fonction. (p26)
	\item	Prédicat caractéristique. (p26)
	\item	Précondition, postcondition et assertion. (p26)
	\item	Programme partiellement correct, programme totalement correct. (p26)
	\item	Formule plus faible. (p27)
	\item	Précondition la plus faible. (p27)
	\item	Précondition la plus faible de la structure if/then/else. Interprétation.
	\item	Précondition la plus faible de la structure while/do. Interprétation.
\end{itemize}


\section{Définitions}
\begin{itemize}
	\item	\textbf{Littéral:} Variable logique ou négation d'une variable logique.
	\item	\textbf{Forme normale conjonctive:} \\
			Conjonction de disjonctions faisant intervenir seulement des littéraux et des opérations logiques.
	\item	\textbf{Forme prenexe:} \\
			 Formule de la forme $\varphi = Q_1x1 ... Q_nx_n \psi$ avec $\forall i, \; Q_i \in \{\exists, \forall \}, x_i \in \mathcal{V}$ et $\psi$ formule logique.
	\item	\textbf{Affectation:} Application de $\mathcal{V} \to \{0,1\}$ qui affecte aux variables leur valeurs.
\end{itemize}


## Resources and references
* [1] *Yannis Haralambous*, Logique INF424 2017
