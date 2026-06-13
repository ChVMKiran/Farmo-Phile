import pandas as pd
import numpy as np
import joblib

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report, precision_score, recall_score, f1_score



# 1. Load dataset
data = pd.read_csv("datasets/crop_recommendation.csv")

# 2. Features and target
X = data.drop("label", axis=1)
y = data["label"]

# 3. Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# 4. Model
model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

# 5. Train
model.fit(X_train, y_train)

# 6. Evaluate
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)

print(f"Accuracy : {accuracy_score(y_test, y_pred) * 100:.2f}%")
print(f"Precision: {precision_score(y_test, y_pred, average='weighted') * 100:.2f}%")
print(f"Recall   : {recall_score(y_test, y_pred, average='weighted') * 100:.2f}%")
print(f"F1 Score : {f1_score(y_test, y_pred, average='weighted') * 100:.2f}%")

print("\nClassification Report:")
print(classification_report(y_test, y_pred))

# 7. Save model
joblib.dump(model, "models/crop_model.pkl")

print("\n✅ Model saved as crop_model.pkl")
