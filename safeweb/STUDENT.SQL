-- SafeStart Driving School - Student Database Tables

CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender ENUM('Male', 'Female', 'Other') NOT NULL,
    phone VARCHAR(15),
    email VARCHAR(100),
    address TEXT,
    id_number VARCHAR(20) UNIQUE,
    registration_date DATE NOT NULL,
    status ENUM('Active', 'Inactive', 'Graduated', 'Dropped') DEFAULT 'Active'
);

CREATE TABLE student_classes (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    class_code VARCHAR(10) NOT NULL,
    enrollment_date DATE NOT NULL,
    start_date DATE,
    end_date DATE,
    status ENUM('Enrolled', 'In Progress', 'Completed', 'Dropped') DEFAULT 'Enrolled',
    FOREIGN KEY (student_id) REFERENCES students(student_id)
);

CREATE TABLE student_payments (
    payment_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    enrollment_id INT,
    amount DECIMAL(10, 2) NOT NULL,
    payment_date DATE NOT NULL,
    payment_method ENUM('Cash', 'Bank Transfer', 'M-Pesa', 'Card') NOT NULL,
    description VARCHAR(255),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (enrollment_id) REFERENCES student_classes(enrollment_id)
);

CREATE TABLE student_attendance (
    attendance_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    enrollment_id INT NOT NULL,
    session_date DATE NOT NULL,
    session_type ENUM('Theory', 'Practical') NOT NULL,
    status ENUM('Present', 'Absent', 'Late') NOT NULL,
    notes TEXT,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (enrollment_id) REFERENCES student_classes(enrollment_id)
);

CREATE TABLE pdl_records (
    pdl_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    enrollment_id INT NOT NULL,
    pdl_number VARCHAR(20) UNIQUE,
    issue_date DATE NOT NULL,
    expiry_date DATE,
    status ENUM('Issued', 'Pending', 'Expired') DEFAULT 'Pending',
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (enrollment_id) REFERENCES student_classes(enrollment_id)
);

CREATE INDEX idx_students_name ON students(last_name, first_name);
CREATE INDEX idx_students_phone ON students(phone);
CREATE INDEX idx_students_id_number ON students(id_number);
CREATE INDEX idx_enrollments_student ON student_classes(student_id);
CREATE INDEX idx_enrollments_class ON student_classes(class_code);
CREATE INDEX idx_payments_student ON student_payments(student_id);
CREATE INDEX idx_payments_enrollment ON student_payments(enrollment_id);
CREATE INDEX idx_attendance_student ON student_attendance(student_id);
CREATE INDEX idx_attendance_enrollment ON student_attendance(enrollment_id);
CREATE INDEX idx_pdl_student ON pdl_records(student_id);
CREATE INDEX idx_pdl_enrollment ON pdl_records(enrollment_id);