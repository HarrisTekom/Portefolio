// Custom Cursor Glow
const cursor = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.reveal');
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

revealElements.forEach(el => revealObserver.observe(el));

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 10);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    });
});

// Navbar Scroll Effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.padding = '0.5rem 0';
        nav.style.background = 'rgba(5, 5, 5, 0.95)';
    } else {
        nav.style.padding = '1rem 0';
        nav.style.background = 'rgba(5, 5, 5, 0.8)';
    }
});

// Add 'reveal' class to sections for consistency
document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
    revealObserver.observe(section);
});

// Project Modal Logic
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');

const projectData = {
    'ecommerce': {
        title: 'Analyse de Site E-commerce',
        content: `
            <h2>🚀 Projet Data Visualization avec Power BI 📊</h2>
            <p>Je viens de finaliser un tableau de bord interactif pour analyser les performances d’un site e-commerce.</p>
            <p>À partir de deux fichiers CSV — l’un appelé <strong>ecommerce_transactions</strong> (issu de Kaggle) et l’autre nommé <strong>coordonnees_pays</strong> (généré grâce à une IA 🤖) — j’ai pu concevoir une analyse visuelle complète :</p>
            
            <h3>🔍 Objectifs du projet</h3>
            <ul>
                <li>Centraliser les données de transactions et de localisation</li>
                <li>Offrir une vision claire des indicateurs clés</li>
                <li>Permettre un filtrage dynamique par pays</li>
            </ul>
            
            <h3>📈 Indicateurs clés présentés</h3>
            <ul>
                <li>Nombre total de transactions</li>
                <li>Chiffre d’affaires global</li>
                <li>Âge moyen des clients</li>
                <li>Répartition du chiffre d’affaires par pays et par catégorie de produits</li>
                <li>Classement des meilleurs clients par nombre d’achats</li>
                <li>Évolution mensuelle des transactions et du chiffre d’affaires</li>
            </ul>
            
            <h3>🌍 Points techniques</h3>
            <ul>
                <li>Utilisation d’un fond de carte pour la répartition géographique</li>
                <li>Segments de filtrage interactifs par pays</li>
                <li>Graphiques croisés pour comparer produits et performances</li>
            </ul>
            
            <p>💡 Ce projet illustre comment combiner données brutes, IA et visualisation pour obtenir rapidement des insights exploitables. Un bel exemple de la puissance de Power BI pour transformer des données brutes en décisions éclairées.</p>
            <p>Réalisation d'un tableau de bord dynamique d'un site de e-commerce, grâce à des sources de données en provenance de kaggle.</p>
        `,
        links: [
            {
                text: 'Accéder au Tableau de Bord',
                url: 'https://drive.google.com/file/d/1FvoKuHeCYnEvYouFUjR3IfTsbkS6V7US/view?usp=sharing',
                icon: 'external-link'
            },
            {
                text: 'Voir la Vidéo Résumé (5 min)',
                url: 'https://drive.google.com/file/d/1YMPrCOm63qPAqbQcK-dBNYfXuf_Sdl9p/view?usp=sharing',
                url: 'https://drive.google.com/file/d/1YMPrCOm63qPAqbQcK-dBNYfXuf_Sdl9p/view?usp=sharing',
                icon: 'play-circle'
            }
        ]
    },
    'ecommerce-db': {
        title: 'Base de données E-commerce & Analyse Décisionnelle',
        content: `
            <h2>📦 Conception & Analyse d'une Plateforme E-commerce 📊</h2>
            <p>Ce projet complet présente la conception et l’analyse d’une base de données relationnelle pour une plateforme e-commerce en France. Il couvre tout le cycle de vie de la donnée, de sa structure initiale à sa visualisation finale.</p>
            <p><em>Note : Ce projet est actuellement en cours de développement.</em></p>

            <div class="project-sections">
                <h3>📂 1. Data & Génération</h3>
                <p>Utilisation de <strong>Jupyter Notebook (Python)</strong> pour générer des fichiers de données (.csv) réalistes et validés avant intégration, permettant de simuler un environnement e-commerce complet.</p>

                <h3>🧱 2. Les Modélisations (MCD/MLD)</h3>
                <p>Identification des 9 entités principales (Clients, Commandes, Produits, etc.) et création des diagrammes via <strong>JMerise/Looping</strong> :</p>
                <ul>
                    <li>Diagramme Entité-Relation (ERD)</li>
                    <li>Modèle Logique de Données (MLD) pour la traduction en tables SQL</li>
                    <li>Définition rigoureuse des clés primaires (PK) et étrangères (FK)</li>
                </ul>

                <h3>💻 3. SQL & Environnement SGBD</h3>
                <p>Implémentation sous <strong>Oracle Database</strong> via <strong>SQL Developer</strong> :</p>
                <ul>
                    <li>Création des tables et application des contraintes (CHECK, UNIQUE, FK)</li>
                    <li>Développement de requêtes avancées pour extraire des insights stratégiques (Revenu global, Taux de succès des paiements, Top produits).</li>
                </ul>

                <h3>📊 4. Visualisation avec Power BI</h3>
                <p>Création de tableaux de bord interactifs pour transformer les requêtes SQL en indicateurs visuels :</p>
                <ul>
                    <li>Performance commerciale (CA mensuel, Meilleurs clients)</li>
                    <li>Analyse logistique intégrée (Géolocalisation des clients/fournisseurs)</li>
                    <li>Efficacité opérationnelle (Retards d'expédition, Taux de succès des paiements)</li>
                </ul>
            </div>
            
            <p>💡 Ce projet démontre ma maîtrise technique sur l'ensemble de la chaîne : du Python pour la data, JMerise pour la structure, SQL pour le moteur, et Power BI pour la décision.</p>
        `,
        links: [
            {
                text: 'Explorer le Repository (Code & Docs)',
                url: 'https://github.com/HarrisTekom/Base_donnee_-e-commerce_analyse-decisionnelle/tree/principal',
                icon: 'github'
            }
        ]
    },
    'banking': {
        title: 'Dashboard Prêts Immobiliers (Banque)',
        content: `
            <h2>🏦 Pilotage de l'Activité & Scoring de Prêts Immobiliers 📈</h2>
            <p>Ce projet majeur consiste en la conception d'un système décisionnel pour une banque anonyme. L'enjeu était de transformer des données bancaires brutes en un outil de pilotage stratégique de l'activité des prêts.</p>
            <p>L'aspect le plus innovant réside dans la création d'un <strong>score d'aide à la décision</strong>, permettant d'évaluer rapidement la viabilité des dossiers de prêts immobiliers.</p>
            
            <h3>🔍 Objectifs du projet</h3>
            <ul>
                <li>Suivre en temps réel le volume et la performance des prêts immobiliers.</li>
                <li>Définir et calculer un score de risque pour faciliter la prise de décision.</li>
                <li>Identifier les tendances du marché bancaire et le profil type des emprunteurs.</li>
            </ul>
            
            <h3>📈 Fonctionnalités du Dashboard</h3>
            <ul>
                <li><strong>Système de Scoring :</strong> Visualisation immédiate de la qualité d'un dossier client.</li>
                <li><strong>Onglet Demande de prêt :</strong> Analyse des flux, montants cumulés et suivi des dossiers en traitement.</li>
                <li><strong>Onglet Performance agence :</strong> Pilotage géographique et comparatif de l'efficacité par ville.</li>
                <li><strong>Segmentation Fine :</strong> Filtrage par type de prêt, durée, et taux d'intérêt.</li>
            </ul>
            
            <h3>🌍 Excellence Technique</h3>
            <ul>
                <li>Intégration d'un workflow ETL complexe via <strong>Power Query</strong>.</li>
                <li>Utilisation avancée du <strong>DAX</strong> pour les calculs de scoring et d'indicateurs financiers.</li>
                <li>Interface utilisateur centrée sur le décideur (UX bancaire).</li>
            </ul>
            
            <p>💡 Ce projet démontre ma capacité à comprendre des problématiques métiers complexes (finance/banque) et à y répondre par des solutions techniques avancées sous Power BI.</p>
        `,
        links: [
            {
                text: 'Voir Onglet : Demande de prêt',
                url: 'demande_pret.png',
                icon: 'layout'
            },
            {
                text: 'Voir Onglet : Performance Agence',
                url: 'performance_agence.png',
                icon: 'map'
            }
        ]
    },
    'airbnb': {
        title: 'Analyse Marché Airbnb 2019',
        content: `
            <h2>🏠 Analyse du Marché Locatif & Immobilier 2019 📊</h2>
            <p>Ce projet est une étude approfondie des tendances du marché locatif Airbnb combinée aux données de ventes immobilières de l'année 2019. L'objectif était de croiser ces deux secteurs pour identifier les zones à fort potentiel et comprendre la dynamique du marché.</p>
            
            <h3>🔍 Objectifs du projet</h3>
            <ul>
                <li>Analyser l'offre et la demande locative Airbnb (prix, taux d'occupation, types de logements).</li>
                <li>Comparer l'activité locative avec le volume et les prix des transactions immobilières réelles.</li>
                <li>Identifier les corrélations entre rentabilité locative et prix d'achat.</li>
            </ul>
            
            <h3>📈 Indicateurs présentés (Répartis sur 2 Pages)</h3>
            <ul>
                <li><strong>Page 1 (Marché Airbnb) :</strong> Prix moyens par quartier, saisonnalité des réservations, répartition des hôtes et des types de propriétés.</li>
                <li><strong>Page 2 (Immobilier & Ventes) :</strong> Volume des ventes par zone géographique, prix moyen au m², et estimations de rentabilité brute.</li>
            </ul>
            
            <h3>🌍 Points techniques</h3>
            <ul>
                <li>Nettoyage et fusion de datasets massifs (Kaggle) via Power Query.</li>
                <li>Analyse croisée multicritères (Locatif vs Transactionnel).</li>
                <li>Visualisation cartographique avancée pour identifier les zones de chaleur.</li>
            </ul>
            
            <p>💡 Une analyse stratégique qui démontre comment la donnée peut aider un investisseur immobilier à choisir les meilleurs emplacements en se basant sur la performance réelle du marché locatif.</p>
        `,
        links: [
            {
                text: 'Dashboard - Page 1 (Airbnb)',
                url: 'https://drive.google.com/file/d/1fqNXo_rfEOeenxyFjhPnY1j8HS0NcUvW/view?usp=sharing',
                icon: 'layout'
            },
            {
                text: 'Dashboard - Page 2 (Immo)',
                url: 'https://drive.google.com/file/d/1xf0AESMTYYMKC1vQ4YqDOmb2jRPL99j4/view?usp=sharing',
                icon: 'layout'
            },
            {
                text: 'Voir la Vidéo Démo (5-10 min)',
                url: 'https://drive.google.com/file/d/13OXml6QJ9LuzL8a6FFmMfJuTH3AlKK9V/view?usp=sharing',
                icon: 'play-circle'
            }
        ]
    },
    'excel-reporting': {
        title: 'Reporting & Analyse Excel Avancé',
        content: `
            <h2>📊 Reporting Dynamique avec Microsoft Excel 📈</h2>
            <p>Ce projet illustre la puissance d'Excel en tant qu'outil de Business Intelligence pour centraliser et analyser des données provenant de multiples sources.</p>
            <p>À partir de <strong>3 feuilles Excel distinctes</strong> contenant des données brutes, j'ai construit un système de reporting complet, automatisé et interactif.</p>
            
            <h3>🔍 Objectifs du projet</h3>
            <ul>
                <li>Consolider des données hétérogènes réparties sur plusieurs onglets.</li>
                <li>Créer une interface de pilotage intuitive pour suivre les indicateurs clés.</li>
                <li>Automatiser la mise à jour des graphiques et des résultats.</li>
            </ul>
            
            <h3>📈 Indicateurs & Fonctionnalités Clés</h3>
            <ul>
                <li><strong>Tableaux Croisés Dynamiques (TCD) :</strong> Analyse multidimensionnelle des données.</li>
                <li><strong>Segments & Chronologies :</strong> Filtrage interactif pour explorer les performances par période ou catégorie.</li>
                <li><strong>Graphiques Combinés :</strong> Visualisation claire de l'évolution des KPI.</li>
            </ul>
            
            <h3>🌍 Points techniques</h3>
            <ul>
                <li>Nettoyage et structuration des données sur 3 sources différentes.</li>
                <li>Utilisation de formules avancées pour le calcul automatique des métriques.</li>
                <li>Conception d'un Layout ergonomique facilitant la lecture pour les décideurs.</li>
            </ul>
            
            <p>💡 Ce projet démontre que même sans outils BI complexes, une maîtrise avancée d'Excel permet de transformer des feuilles de calcul statiques en véritables outils de décision stratégique.</p>
        `,
        links: [
            {
                text: 'Consulter le Fichier Excel (Tableau de Bord)',
                url: 'https://docs.google.com/spreadsheets/d/19vOSYcvhIcPuZUjNz-Iqq9rXh9kui6DX/edit?gid=2035302696#gid=2035302696',
                icon: 'file-spreadsheet'
            },
            {
                text: 'Voir la Vidéo de Présentation (5 min)',
                url: 'https://drive.google.com/file/d/1-dFLE4yUYIELl0o8smzHbR8_XaynKceB/view?usp=sharing',
                icon: 'play-circle'
            }
        ]
    },
    'power-query': {
        title: 'Optimisation Power Query (Data Prep)',
        content: `
            <h2>🚀 Power Query Editor : L’allié indispensable de la fiabilité des données 🛠️</h2>
            <p>Dans tout projet Data, la qualité des données est clé. Ce projet illustre l'étape cruciale de préparation et de transformation des données avant toute visualisation.</p>
            <p>Réalisé dans le cadre d'un système de scoring pour les prêts immobiliers d'une banque anonyme, ce travail montre comment transformer des données brutes en indicateurs fiables.</p>
            
            <h3>🔍 Capacités illustrées</h3>
            <ul>
                <li><strong>Nettoyage complet :</strong> Suppression des doublons et gestion des valeurs manquantes.</li>
                <li><strong>Transformation avancée :</strong> Fusion de tables, pivotage de colonnes et typage précis.</li>
                <li><strong>Automatisation :</strong> Mise en place d'étapes de préparation reproductibles grâce au <strong>Langage M</strong>.</li>
            </ul>
            
            <h3>📈 Pourquoi Power Query ?</h3>
            <ul>
                <li><strong>Simplicité & Puissance :</strong> Une interface accessible qui permet de gérer des flux de données complexes.</li>
                <li><strong>Gain de temps :</strong> Automatisation des processus quand les sources de données se multiplient.</li>
                <li><strong>Fiabilité :</strong> Garantit que les dashboards finaux reposent sur des données saines et actionnables.</li>
            </ul>
            
            <p>💡 Power Query est l'étape "invisible" mais vitale qui permet de passer de la donnée brute à la décision éclairée.</p>
        `,
        links: [
            {
                text: 'Consulter l\'illustration technique',
                url: 'https://drive.google.com/file/d/1smTzWmMQm817OaZje_A7RjmW3fNd-QIA/view?usp=sharing',
                icon: 'file-text'
            },
            {
                text: 'Voir la Vidéo Démo Power Query',
                url: 'https://drive.google.com/file/d/1KvC1ZJGJWAngby6egBjbw8QaF5BO42xV/view?usp=sharing',
                icon: 'play-circle'
            }
        ]
    }
};

function openProjectModal(id) {
    const data = projectData[id];
    if (!data) return;

    let linksHtml = '<div class="modal-links">';
    data.links.forEach(link => {
        linksHtml += `
            <a href="${link.url}" target="_blank" class="modal-btn">
                <i data-lucide="${link.icon}"></i>
                <span>${link.text}</span>
            </a>
        `;
    });
    linksHtml += '</div>';

    modalBody.innerHTML = data.content + linksHtml;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scroll
    lucide.createIcons(); // Initialize icons in modal
}

function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scroll
}

function closeModalOnLayout(event) {
    if (event.target === modal) {
        closeProjectModal();
    }
}
