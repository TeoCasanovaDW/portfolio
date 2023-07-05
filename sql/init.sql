CREATE DATABASE IF NOT EXISTS portfolio

-- Create Projets table with auto-increment primary key
CREATE TABLE Projets (
    project_id INT PRIMARY KEY AUTO_INCREMENT,
    project_title VARCHAR(255) NOT NULL,
    project_category VARCHAR(255),
    project_timing VARCHAR(255),
    project_labels VARCHAR(255),
    project_responsive BOOLEAN NOT NULL,
    project_thumbnail_path VARCHAR(255),
    project_video_path VARCHAR(255),
    project_description TEXT,
		project_creation_date DATETIME NOT NULL
);

-- Create Recommandations table with auto-increment primary key
CREATE TABLE Recommandations (
    reco_id INT PRIMARY KEY AUTO_INCREMENT,
    reco_author_firstname VARCHAR(255),
    reco_author_lastname VARCHAR(255),
    reco_description TEXT,
		reco_date DATETIME NOT NULL
);