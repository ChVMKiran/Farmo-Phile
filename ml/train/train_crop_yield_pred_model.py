import pandas as pd
import numpy as np

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import r2_score, mean_absolute_error

import joblib

data = pd.read_csv("datasets/crop_yield.csv")

data = data.drop(columns=["Production", "Crop_Year"])

X = data.drop(columns=["Yield"])
y = data["Yield"]


categorical_features = ["Crop", "Season", "State"]
numeric_features = [
    "Area",
    "Annual_Rainfall",
    "Fertilizer",
    "Pesticide"
]


categorical_transformer = OneHotEncoder(
    handle_unknown="ignore",
    sparse_output=False
)

preprocessor = ColumnTransformer(
    transformers=[
        ("cat", categorical_transformer, categorical_features),
        ("num", "passthrough", numeric_features)
    ]
)


model = RandomForestRegressor(
    n_estimators=200,
    random_state=42,
    n_jobs=-1
)


pipeline = Pipeline(
    steps=[
        ("preprocessor", preprocessor),
        ("model", model)
    ]
)


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)


pipeline.fit(X_train, y_train)


y_pred = pipeline.predict(X_test)

r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)

print(f"R2 Score: {r2:.4f}")
print(f"MAE: {mae:.4f}")


joblib.dump(pipeline, "models/yield_model.pkl")

print("Yield model saved successfully!")
